import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101LeiauteEventoCancNFeV100Evento } from './CEventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
