import { TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento } from './TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento';

export interface IEventoEntregaNFePlV101EventoCancEntregaNFeV100 {
  "@class"?: string;
  evento?: TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento;
}

export class CEventoEntregaNFePlV101EventoCancEntregaNFeV100 {
    public "@class"?: string;

    public evento?: TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento;

    public constructor(props?: CEventoEntregaNFePlV101EventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EventoCancEntregaNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
