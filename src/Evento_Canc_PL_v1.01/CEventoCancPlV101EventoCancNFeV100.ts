import { TEventoCancPlV101EventoCancNFeV100Evento } from './TEventoCancPlV101EventoCancNFeV100Evento';

export interface IEventoCancPlV101EventoCancNFeV100 {
  "@class"?: string;
  evento?: TEventoCancPlV101EventoCancNFeV100Evento;
}

export class CEventoCancPlV101EventoCancNFeV100 {
    public "@class"?: string;

    public evento?: TEventoCancPlV101EventoCancNFeV100Evento;

    public constructor(props?: CEventoCancPlV101EventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101EventoCancNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
