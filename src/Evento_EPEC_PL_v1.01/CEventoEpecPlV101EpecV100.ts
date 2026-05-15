import { TEventoEpecPlV101EpecV100Evento } from './TEventoEpecPlV101EpecV100Evento';

export interface IEventoEpecPlV101EpecV100 {
  "@class"?: string;
  evento?: TEventoEpecPlV101EpecV100Evento;
}

export class CEventoEpecPlV101EpecV100 {
    public "@class"?: string;

    public evento?: TEventoEpecPlV101EpecV100Evento;

    public constructor(props?: CEventoEpecPlV101EpecV100) {
        this["@class"] = ".CEventoEpecPlV101EpecV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
