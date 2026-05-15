import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100RetEnvEvento {
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
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
