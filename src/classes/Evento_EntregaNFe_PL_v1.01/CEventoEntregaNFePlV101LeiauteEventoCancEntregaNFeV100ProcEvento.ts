import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento';

import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
