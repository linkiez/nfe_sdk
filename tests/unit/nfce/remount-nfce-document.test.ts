import {
  isNFCeResendWindowOpen,
  remountNFCeDocument,
} from '../../../src/canonical/nfce/remount-nfce-document';
import { buildNFCeDocument } from '../../../src/canonical/nfce/build-nfce-document';

import { nfceDraft, OFFLINE_IDE } from '../../fixtures/nfce/nfce-builder-drafts';

const NEW_EMISSION = '2026-11-10T12:20:00-03:00';

describe('remountNFCeDocument', () => {
  it('rebuilds the same number and series with a new emission time and a new cNF', () => {
    const original = buildNFCeDocument(nfceDraft());

    const remounted = remountNFCeDocument(nfceDraft(), { dhEmi: NEW_EMISSION });

    expect(remounted.xml).toContain(`<dhEmi>${NEW_EMISSION}</dhEmi>`);
    expect(remounted.xml).not.toContain('<dhEmi>2026-11-10T12:00:00-03:00</dhEmi>');
    expect(remounted.cNF).not.toBe(original.cNF);
    expect(remounted.cNF).toMatch(/^\d{8}$/u);
    expect(remounted.accessKey).not.toBe(original.accessKey);
    expect(remounted.accessKey.slice(22, 25)).toBe('001');
    expect(remounted.accessKey.slice(25, 34)).toBe('000000001');
    expect(remounted.accessKey.slice(20, 22)).toBe('65');
  });

  it('never reuses the previous cNF, even when asked to draw the same one', () => {
    const draft = nfceDraft();

    for (let attempt = 0; attempt < 20; attempt += 1) {
      expect(remountNFCeDocument(draft, { dhEmi: NEW_EMISSION }).cNF).not.toBe('48201937');
    }
  });

  it('uses the explicit cNF when it is valid and different from the previous one', () => {
    const remounted = remountNFCeDocument(nfceDraft(), {
      cNF: '73920184',
      dhEmi: NEW_EMISSION,
    });

    expect(remounted.cNF).toBe('73920184');
    expect(remounted.accessKey.slice(35, 43)).toBe('73920184');
  });

  it('refuses an explicit cNF equal to the previous one', () => {
    expect(() =>
      remountNFCeDocument(nfceDraft(), { cNF: '48201937', dhEmi: NEW_EMISSION }),
    ).toThrow(/cNF/);
  });

  it('refuses a new emission time that is not later than the original', () => {
    expect(() =>
      remountNFCeDocument(nfceDraft(), { dhEmi: '2026-11-10T11:59:59-03:00' }),
    ).toThrow(/dhEmi/);
  });

  it('keeps the NFC-e rules: a remounted draft that is not valid is still refused', () => {
    expect(() =>
      remountNFCeDocument(nfceDraft({}, { mod: '55' }), { dhEmi: NEW_EMISSION }),
    ).toThrow();
  });

  it('remounts an offline contingency note keeping tpEmis 9', () => {
    const remounted = remountNFCeDocument(nfceDraft({}, OFFLINE_IDE), {
      dhEmi: NEW_EMISSION,
    });

    expect(remounted.accessKey.slice(34, 35)).toBe('9');
  });

  it('does not change the input draft', () => {
    const draft = nfceDraft();
    const snapshot = JSON.stringify(draft);

    remountNFCeDocument(draft, { dhEmi: NEW_EMISSION });

    expect(JSON.stringify(draft)).toBe(snapshot);
  });
});

describe('isNFCeResendWindowOpen', () => {
  const issued = '2026-11-10T12:00:00-03:00';
  const at = (offsetSeconds: number) =>
    new Date(new Date(issued).getTime() + offsetSeconds * 1000);

  it.each([
    [0, true],
    [60, true],
    [300, true],
    [301, false],
    [3600, false],
  ])('at +%is the resend window of the same signed XML is open: %s', (offset, open) => {
    expect(isNFCeResendWindowOpen(issued, at(offset))).toBe(open);
  });

  it('treats an unreadable emission time as closed, so the document is queried first', () => {
    expect(isNFCeResendWindowOpen('not a date', at(0))).toBe(false);
  });
});
