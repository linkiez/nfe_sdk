import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Dados do protocolo de status
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a NF-3e
   */
  public verAplic?: unknown;
  /**
   * Chave de acesso do MDF-e
   */
  public chMDFe?: unknown;
  /**
   * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD.
   */
  public dhRecbto?: unknown;
  /**
   * Número do Protocolo de Status do MDF-e
   */
  public nProt?: unknown;
  /**
   * Digest Value do MDF-e processado. Utilizado para conferir a integridade do MDF-e original.
   */
  public digVal?: unknown;
  /**
   * Descrição literal do status do MDF-e.
   */
  public xMotivo?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt instance.
   * Schema context: Dados do protocolo de status
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'chMDFe',
        'dhRecbto',
        'nProt',
        'digVal',
        'xMotivo',
      ]);
    }
  }
}
