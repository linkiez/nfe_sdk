import { TEventoAverbPlV101AverbV100Evento } from './TEventoAverbPlV101AverbV100Evento';

export interface IEventoAverbPlV101AverbV100 {
  "@class"?: string;
  evento?: TEventoAverbPlV101AverbV100Evento;
}

export class CEventoAverbPlV101AverbV100 {
    public "@class"?: string;

    public evento?: TEventoAverbPlV101AverbV100Evento;

    public constructor(props?: CEventoAverbPlV101AverbV100) {
        this["@class"] = ".CEventoAverbPlV101AverbV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
