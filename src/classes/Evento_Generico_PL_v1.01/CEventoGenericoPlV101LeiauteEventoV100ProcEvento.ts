import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoGenericoPlV101LeiauteEventoV100Evento } from './CEventoGenericoPlV101LeiauteEventoV100Evento';

import { CEventoGenericoPlV101LeiauteEventoV100RetEvento } from './CEventoGenericoPlV101LeiauteEventoV100RetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoGenericoPlV101LeiauteEventoV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101LeiauteEventoV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100ProcEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoGenericoPlV101LeiauteEventoV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoGenericoPlV101LeiauteEventoV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
