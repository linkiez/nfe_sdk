import { publicPackageContract } from '../../src/index';

describe('signing expansion boundary', () => {
  it('makes the deferred signing boundaries explicit in the public contract notes', () => {
    expect(publicPackageContract.compatibilityNotes).toEqual(
      expect.arrayContaining([
        'The signing-expansion slice keeps trust chain automation, certificate acquisition workflows, and A3 support outside this phase.',
        'The signing-expansion slice keeps QR Code, DANFE NFC-e, and multi-UF NFC-e operational rollout outside this phase.',
      ]),
    );
  });
});
