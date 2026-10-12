import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEconfV100LeiauteEventoCancEConfV100Evento } from './CEventoEconfV100LeiauteEventoCancEConfV100Evento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoCancEConfV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
