import { InvalidManifestationTransitionError } from '../../../../src/canonical/recipient/errors.js';
import { validateManifestationTransition } from '../../../../src/canonical/recipient/change-manifestation.js';

describe('validateManifestationTransition', () => {
  describe('allowed transitions from ciencia-da-operacao', () => {
    it('allows Ciência → Confirmação', () => {
      expect(() =>
        validateManifestationTransition(
          'ciencia-da-operacao',
          'confirmacao-da-operacao',
        ),
      ).not.toThrow();
    });

    it('allows Ciência → Desconhecimento', () => {
      expect(() =>
        validateManifestationTransition(
          'ciencia-da-operacao',
          'desconhecimento-da-operacao',
        ),
      ).not.toThrow();
    });

    it('allows Ciência → NãoRealizada', () => {
      expect(() =>
        validateManifestationTransition(
          'ciencia-da-operacao',
          'operacao-nao-realizada',
        ),
      ).not.toThrow();
    });
  });

  describe('forbidden transitions throw InvalidManifestationTransitionError', () => {
    it('forbids Confirmação → Ciência', () => {
      expect(() =>
        validateManifestationTransition(
          'confirmacao-da-operacao',
          'ciencia-da-operacao',
        ),
      ).toThrow(InvalidManifestationTransitionError);
    });

    it('forbids Confirmação → Desconhecimento', () => {
      expect(() =>
        validateManifestationTransition(
          'confirmacao-da-operacao',
          'desconhecimento-da-operacao',
        ),
      ).toThrow(InvalidManifestationTransitionError);
    });

    it('forbids Desconhecimento → Confirmação', () => {
      expect(() =>
        validateManifestationTransition(
          'desconhecimento-da-operacao',
          'confirmacao-da-operacao',
        ),
      ).toThrow(InvalidManifestationTransitionError);
    });

    it('forbids NãoRealizada → Confirmação', () => {
      expect(() =>
        validateManifestationTransition(
          'operacao-nao-realizada',
          'confirmacao-da-operacao',
        ),
      ).toThrow(InvalidManifestationTransitionError);
    });

    it('error message includes both types', () => {
      expect(() =>
        validateManifestationTransition(
          'confirmacao-da-operacao',
          'desconhecimento-da-operacao',
        ),
      ).toThrow('confirmacao-da-operacao');
    });
  });
});
