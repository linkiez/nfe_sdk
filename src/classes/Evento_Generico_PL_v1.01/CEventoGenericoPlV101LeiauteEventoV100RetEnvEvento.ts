import { CEventoGenericoPlV101LeiauteEventoV100RetEvento } from './CEventoGenericoPlV101LeiauteEventoV100RetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge';

import { TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento {
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
    public cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
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
    public retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoGenericoPlV101LeiauteEventoV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
