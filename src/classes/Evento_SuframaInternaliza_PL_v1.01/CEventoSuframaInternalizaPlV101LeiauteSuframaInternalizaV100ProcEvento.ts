import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento';

import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
