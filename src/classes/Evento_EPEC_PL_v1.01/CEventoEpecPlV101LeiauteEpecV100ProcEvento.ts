import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecPlV101LeiauteEpecV100Evento } from './CEventoEpecPlV101LeiauteEpecV100Evento';

import { CEventoEpecPlV101LeiauteEpecV100RetEvento } from './CEventoEpecPlV101LeiauteEpecV100RetEvento';

import { TEventoEpecPlV101LeiauteEpecV100VerEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoEpecPlV101LeiauteEpecV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100ProcEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEpecPlV101LeiauteEpecV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEpecPlV101LeiauteEpecV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
