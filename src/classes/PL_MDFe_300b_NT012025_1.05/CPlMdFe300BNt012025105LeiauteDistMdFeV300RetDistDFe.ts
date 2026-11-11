import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe } from './CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe';

import { TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe';

/**
 * Schema XML de validação do lote de retorno de documentos ficais eletronicos
 */
export class CPlMdFe300BNt012025105LeiauteDistMdFeV300RetDistDFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Versão do Aplicativo que atendeu a pedido de distribuição de DF-e
   */
  public verAplic?: unknown;
  /**
   * código do status de resultado da pesquisa
   */
  public cStat?: unknown;
  /**
   * descrição do resultado do pesquisa
   */
  public xMotivo?: unknown;
  /**
   * último NSU
   */
  public ultNSU?: unknown;
  /**
   * Tipo Versão
   */
  public $versao?: TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe;

  //choice

  /**
   * Selects the lote dist mdfe comp branch for this schema choice.
   * @param arg - Branch value assigned to loteDistMDFeComp.
   */
  public loteDistMDFeComp(arg: unknown) {
    delete (this as any).loteDistMDFe;
    (this as any).loteDistMDFeComp = arg;
  }

  //choice

  /**
   * Selects the lote dist mdfe branch for this schema choice.
   * @param arg - Branch value assigned to loteDistMDFe.
   */
  public loteDistMDFe(arg: unknown) {
    delete (this as any).loteDistMDFeComp;
    (this as any).loteDistMDFe = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105LeiauteDistMdFeV300RetDistDFe instance.
   * Schema context: Schema XML de validação do lote de retorno de documentos ficais eletronicos
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105LeiauteDistMdFeV300RetDistDFe,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105LeiauteDistMdFeV300RetDistDFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'cStat',
        'xMotivo',
        'ultNSU',
        '$versao',
      ]);
    }
  }
}
