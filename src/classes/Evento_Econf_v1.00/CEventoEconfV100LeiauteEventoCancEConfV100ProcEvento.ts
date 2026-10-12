import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEconfV100LeiauteEventoCancEConfV100Evento } from './CEventoEconfV100LeiauteEventoCancEConfV100Evento';

import { CEventoEconfV100LeiauteEventoCancEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoCancEConfV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
