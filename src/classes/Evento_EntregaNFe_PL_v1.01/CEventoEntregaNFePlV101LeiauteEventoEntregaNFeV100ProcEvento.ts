import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento';

import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
