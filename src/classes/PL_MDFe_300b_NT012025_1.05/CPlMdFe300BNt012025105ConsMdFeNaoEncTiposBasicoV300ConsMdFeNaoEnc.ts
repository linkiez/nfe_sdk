import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Pedido de Consulta MDF-e Não Encerrados
 */
export class CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300ConsMdFeNaoEnc {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Serviço Solicitado
   */
  public xServ?: unknown;
  /**
   * Schema attribute versao.
   */
  public $versao?: any;

  //choice

  /**
   * CNPJ do emitente do MDF-e Informar zeros não significativos
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  //choice

  /**
   * CPF do emitente do MDF-e Informar zeros não significativos Usar com serie específica 920-969 para emitente pessoa física com inscrição estadual
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300ConsMdFeNaoEnc instance.
   * Schema context: Tipo Pedido de Consulta MDF-e Não Encerrados
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300ConsMdFeNaoEnc,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300ConsMdFeNaoEnc';

    if (props) {
      assignSchemaProperties(this, props, ['tpAmb', 'xServ', '$versao']);
    }
  }
}
