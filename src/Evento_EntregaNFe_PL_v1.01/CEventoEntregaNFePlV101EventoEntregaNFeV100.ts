import { TEventoEntregaNFePlV101EventoEntregaNFeV100Evento } from './TEventoEntregaNFePlV101EventoEntregaNFeV100Evento';

export interface IEventoEntregaNFePlV101EventoEntregaNFeV100 {
  "@class"?: string;
  evento?: TEventoEntregaNFePlV101EventoEntregaNFeV100Evento;
}

export class CEventoEntregaNFePlV101EventoEntregaNFeV100 {
    public "@class"?: string;

    public evento?: TEventoEntregaNFePlV101EventoEntregaNFeV100Evento;

    public constructor(props?: CEventoEntregaNFePlV101EventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EventoEntregaNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
