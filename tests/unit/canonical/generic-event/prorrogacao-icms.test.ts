import { mapICMSDeferralEvent } from '../../../../src/canonical/generic-event/prorrogacao-icms-payload.js';
import type { ICMSDeferralPayload } from '../../../../src/canonical/generic-event/prorrogacao-icms-payload.js';

describe('mapICMSDeferralEvent', () => {
  const basePayload: ICMSDeferralPayload = {
    authorizationProtocol: '141240000112345',
    items: [
      { itemNumber: '001', quantity: '10.0000' },
      { itemNumber: '002', quantity: '5.5000' },
    ],
  };

  it('produces detEvento with event code 110764 structure', () => {
    const xml = mapICMSDeferralEvent(basePayload);
    expect(xml).toContain('<detEvento versao="1.00">');
    expect(xml).toContain('<descEvento>Pedido de Prorrogacao</descEvento>');
    expect(xml).toContain('</detEvento>');
  });

  it('includes nProt from authorizationProtocol', () => {
    const xml = mapICMSDeferralEvent(basePayload);
    expect(xml).toContain('<nProt>141240000112345</nProt>');
  });

  it('includes all itemPedido elements with numItem attribute and qtdeItem', () => {
    const xml = mapICMSDeferralEvent(basePayload);
    expect(xml).toContain('numItem="001"');
    expect(xml).toContain('<qtdeItem>10.0000</qtdeItem>');
    expect(xml).toContain('numItem="002"');
    expect(xml).toContain('<qtdeItem>5.5000</qtdeItem>');
  });

  it('escapes special XML characters in protocol number', () => {
    const payload: ICMSDeferralPayload = {
      authorizationProtocol: '<proto>&test;</proto>',
      items: [{ itemNumber: '001', quantity: '1.0000' }],
    };
    const xml = mapICMSDeferralEvent(payload);
    expect(xml).toContain('&lt;proto&gt;&amp;test;&lt;/proto&gt;');
    expect(xml).not.toContain('<proto>');
  });

  it('produces well-formed XML for single item', () => {
    const payload: ICMSDeferralPayload = {
      authorizationProtocol: '141240000199999',
      items: [{ itemNumber: '001', quantity: '100.0000' }],
    };
    const xml = mapICMSDeferralEvent(payload);
    expect(xml).toBe(
      '<detEvento versao="1.00">' +
        '<descEvento>Pedido de Prorrogacao</descEvento>' +
        '<nProt>141240000199999</nProt>' +
        '<itemPedido numItem="001"><qtdeItem>100.0000</qtdeItem></itemPedido>' +
        '</detEvento>',
    );
  });
});
