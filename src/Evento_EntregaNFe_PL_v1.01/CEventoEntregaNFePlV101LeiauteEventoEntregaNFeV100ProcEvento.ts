import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento';

import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento } from './TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento {
  "@class"?: string;
  evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
