import { TEventoCCePlV101CCeV100Evento } from './TEventoCCePlV101CCeV100Evento';

export interface IEventoCCePlV101CCeV100 {
  "@class"?: string;
  evento?: TEventoCCePlV101CCeV100Evento;
}

export class CEventoCCePlV101CCeV100 {
    public "@class"?: string;

    public evento?: TEventoCCePlV101CCeV100Evento;

    public constructor(props?: CEventoCCePlV101CCeV100) {
        this["@class"] = ".CEventoCCePlV101CCeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
