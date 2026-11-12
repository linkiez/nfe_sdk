import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento';

import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa';

import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar SUFRAMA, 91 RFB, 92 BackOffice BRId e 93 ONE
   */
  public cOrgao?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Chave de Acesso MDF-e vinculado
   */
  public chMDFe?: unknown;
  /**
   * Schema property dh Evento.
   */
  public dhEvento?: unknown;
  /**
   * Tipo do Evento vinculado
   */
  public tpEvento?: string;
  /**
   * Detalhamento do evento específico
   */
  public detEvento?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento;
  /**
   * Grupo de informações do pedido de registro de evento da Nota Fiscal Fácil
   */
  public infSolicNFF?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff;
  /**
   * Grupo de Informação do Provedor de Assinatura e Autorização
   */
  public infPAA?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  public verAplic?: unknown;
  /**
   * Código do status da registro do Evento
   */
  public cStat?: unknown;
  /**
   * Descrição literal do status do registro do Evento
   */
  public xMotivo?: unknown;
  /**
   * Data e Hora de do recebimento do evento ou do registro do evento formato AAAA-MM-DDThh:mm:ss TZD
   */
  public dhRegEvento?: unknown;
  /**
   * Número do protocolo de registro do evento
   */
  public nProt?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento instance.
   * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento';

    if (props) {
      assignSchemaProperties(this, props, [
        'cOrgao',
        'tpAmb',
        'chMDFe',
        'dhEvento',
        'tpEvento',
      ]);
      this.detEvento = props.detEvento
        ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento(
            props.detEvento,
          )
        : undefined;
      this.infSolicNFF = props.infSolicNFF
        ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff(
            props.infSolicNFF,
          )
        : undefined;
      this.infPAA = props.infPAA
        ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa(
            props.infPAA,
          )
        : undefined;
      assignSchemaProperties(this, props, [
        'verAplic',
        'cStat',
        'xMotivo',
        'dhRegEvento',
        'nProt',
      ]);
    }
  }
}
