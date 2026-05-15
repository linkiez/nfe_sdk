import { TEventoEconfV100EventoEConfV100Evento } from './TEventoEconfV100EventoEConfV100Evento';

export interface IEventoEconfV100EventoEConfV100 {
  "@class"?: string;
  evento?: TEventoEconfV100EventoEConfV100Evento;
}

export class CEventoEconfV100EventoEConfV100 {
    public "@class"?: string;

    public evento?: TEventoEconfV100EventoEConfV100Evento;

    public constructor(props?: CEventoEconfV100EventoEConfV100) {
        this["@class"] = ".CEventoEconfV100EventoEConfV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
