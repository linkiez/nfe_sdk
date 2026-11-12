import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema XML de validação do evento do encerramento 110112
 */
export class CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  public nProt?: unknown;
  /**
   * Data que o Manifesto foi encerrado
   */
  public dtEnc?: unknown;
  /**
   * UF de encerramento do Manifesto
   */
  public cUF?: unknown;
  /**
   * Código do Município de Encerramento do manifesto
   */
  public cMun?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe instance.
   * Schema context: Schema XML de validação do evento do encerramento 110112
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe) {
    this['@class'] = '.CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['nProt', 'dtEnc', 'cUF', 'cMun']);
    }
  }
}
