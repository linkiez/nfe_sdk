import { CEventoAverbPlV101LeiauteAverbV100Evento } from './CEventoAverbPlV101LeiauteAverbV100Evento';

import { CEventoAverbPlV101LeiauteAverbV100TretEvento } from './CEventoAverbPlV101LeiauteAverbV100TretEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoAverbPlV101LeiauteAverbV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101LeiauteAverbV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100ProcEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAverbPlV101LeiauteAverbV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoAverbPlV101LeiauteAverbV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
