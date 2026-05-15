import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento';

import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento } from './TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento {
  "@class"?: string;
  evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
