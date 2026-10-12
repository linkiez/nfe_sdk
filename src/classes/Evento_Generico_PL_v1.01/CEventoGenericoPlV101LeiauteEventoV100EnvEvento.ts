import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoGenericoPlV101LeiauteEventoV100Evento } from './CEventoGenericoPlV101LeiauteEventoV100Evento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoGenericoPlV101LeiauteEventoV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101LeiauteEventoV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100EnvEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoGenericoPlV101LeiauteEventoV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
