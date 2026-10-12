import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101LeiauteEventoCancNFeV100Evento } from './CEventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from './CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
