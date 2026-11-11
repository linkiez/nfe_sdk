import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema XML de validação do evento de confirmação do serviço de transporte 110117
 */
export class CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  public nProt?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe instance.
   * Schema context: Schema XML de validação do evento de confirmação do serviço de transporte 110117
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['nProt']);
    }
  }
}
