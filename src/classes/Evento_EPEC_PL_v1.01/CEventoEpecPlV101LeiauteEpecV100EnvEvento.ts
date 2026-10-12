import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecPlV101LeiauteEpecV100Evento } from './CEventoEpecPlV101LeiauteEpecV100Evento';

import { TEventoEpecPlV101LeiauteEpecV100VerEnvEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoEpecPlV101LeiauteEpecV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100EnvEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEpecPlV101LeiauteEpecV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
