import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do òrgao que registrou o Evento
     */
    public cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
