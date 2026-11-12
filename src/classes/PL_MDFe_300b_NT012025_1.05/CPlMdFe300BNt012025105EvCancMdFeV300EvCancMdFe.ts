import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema XML de validação do evento do cancelamento 110111
 */
export class CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 -SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  public nProt?: unknown;
  /**
   * Justificativa do Cancelamento
   */
  public xJust?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe instance.
   * Schema context: Schema XML de validação do evento do cancelamento 110111
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe) {
    this['@class'] = '.CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['nProt', 'xJust']);
    }
  }
}
