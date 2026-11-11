import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe';

/**
 * Schema XML de validação da área de dados da mensagem da solicitação de distribuição de DF-e
 */
export class CPlMdFe300BNt012025105LeiauteDistMdFeV300DistDFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Versão do Aplicativo que solicitou a distribuição de DF-e
   */
  public verAplic?: unknown;
  /**
   * último NSU recebido, caso seja informado com zero, o Ambiente Autorizador tentará localizar o primeiro DF-e existente.
   */
  public ultNSU?: unknown;
  /**
   * Tipo Versão
   */
  public $versao?: TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105LeiauteDistMdFeV300DistDFe instance.
   * Schema context: Schema XML de validação da área de dados da mensagem da solicitação de distribuição de DF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105LeiauteDistMdFeV300DistDFe) {
    this['@class'] = '.CPlMdFe300BNt012025105LeiauteDistMdFeV300DistDFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'ultNSU',
        '$versao',
      ]);
    }
  }
}
