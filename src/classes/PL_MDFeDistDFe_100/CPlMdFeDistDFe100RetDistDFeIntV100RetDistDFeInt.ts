import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt } from './CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt';

/**
 * Schema do resultado do pedido de distribuição de DF-e de interesse
 */
export class CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Versão do Web Service MDFeDistribuicaoDFe
   */
  public verAplic?: unknown;
  /**
   * Código do status de processamento da requisição
   */
  public cStat?: unknown;
  /**
   * Descrição literal do status do processamento da requisição
   */
  public xMotivo?: unknown;
  /**
   * Último NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir deste NSU para obter novos resultados.
   */
  public ultNSU?: unknown;
  /**
   * Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado
   */
  public maxNSU?: unknown;
  /**
   * Conjunto de informações resumidas e documentos fiscais eletrônicos de interesse da pessoa ou empresa.
   */
  public loteDistDFeInt?: CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt instance.
   * Schema context: Schema do resultado do pedido de distribuição de DF-e de interesse
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt) {
    this['@class'] = '.CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'cStat',
        'xMotivo',
        'ultNSU',
        'maxNSU',
      ]);
      this.loteDistDFeInt = props.loteDistDFeInt
        ? new CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt(
            props.loteDistDFeInt,
          )
        : undefined;
    }
  }
}
