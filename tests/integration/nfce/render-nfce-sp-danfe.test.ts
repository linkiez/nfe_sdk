import { buildSPDanfeAuthorizationOutcome } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { renderNFCeSPDANFE } from '../../../src/index.js';

const ACCESS_KEY = '35260512345678000123650020000004561876543219';

describe('renderNFCeSPDANFE', () => {
  it.each(['production', 'homologation'] as const)(
    'renders the required fields for %s authorization evidence',
    async (environment) => {
      const result = await renderNFCeSPDANFE({
        authorization: buildSPDanfeAuthorizationOutcome(environment),
      });
      const html = result.html;

      expect(result).toMatchObject({
        accessKey: ACCESS_KEY,
        environment,
        mediaType: 'text/html',
        protocolNumber:
          environment === 'production'
            ? '13526000000000001'
            : '135190000000001',
      });
      expect(html).toContain('Comercio Teste &amp; Filhos');
      expect(html).toContain('Rua de Teste, 100 - Centro - Sao Paulo - SP');
      expect(html).toContain('Consumidor Entrega - 12345678901');
      expect(html).toContain(
        'Entrega: Avenida da Entrega, 200 - Apto 12 - Bela Vista - Sao Paulo - SP - CEP 01310930',
      );
      expect(html).toContain('1. Cafe &amp; acucar');
      expect(html).toContain('2. Biscoito integral pacote familiar');
      expect(html).toContain('Quantidade: 2.0000 UN');
      expect(html).toContain('Valor unitário: 5.00');
      expect(html).toContain('Valor total: 10.00');
      expect(html).toContain('Valor a pagar');
      expect(html).toContain('Seguro');
      expect(html).toContain('R$ 1.00');
      expect(html).toContain('Pagamento');
      expect(html).toContain('Protocolo de autorização:');
      expect(html).toContain('2026-05-20T10:30:03-03:00');
      expect(html).toContain('Documento de teste.');
      expect(html).toContain('3526 0512 3456 7800 0123 6500 2000 0004 5618 7654 3219');
      expect(html).toContain('href="https://');
      expect(html).not.toMatch(/<(?:script|img|link)\b/iu);
      expect(html).not.toMatch(/(?:src|@import|url\()\s*=\s*["']?https?:/iu);
      expect(result.requestEnvelopeSha256).toMatch(/^[a-f0-9]{64}$/u);
      expect(html).toContain(result.requestEnvelopeSha256);
      expect(html).toContain('width="25mm" height="25mm"');

      if (environment === 'homologation') {
        expect(html).toContain(
          'EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL',
        );
      } else {
        expect(html).not.toContain('SEM VALOR FISCAL');
      }
    },
  );
});
