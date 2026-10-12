import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento';

import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
