import { CEventoEconfV100LeiauteEventoEConfV100Evento } from './CEventoEconfV100LeiauteEventoEConfV100Evento';

import { CEventoEconfV100LeiauteEventoEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoEconfV100LeiauteEventoEConfV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoEConfV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100ProcEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoEConfV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoEConfV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
