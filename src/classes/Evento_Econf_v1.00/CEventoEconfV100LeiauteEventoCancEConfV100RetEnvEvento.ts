import { CEventoEconfV100LeiauteEventoCancEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento {
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
    public cOrgao?: unknown;
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
    public retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
