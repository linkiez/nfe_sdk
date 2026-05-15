import { TEventoEconfV100EventoCancEConfV100Evento } from './TEventoEconfV100EventoCancEConfV100Evento';

export interface IEventoEconfV100EventoCancEConfV100 {
  "@class"?: string;
  evento?: TEventoEconfV100EventoCancEConfV100Evento;
}

export class CEventoEconfV100EventoCancEConfV100 {
    public "@class"?: string;

    public evento?: TEventoEconfV100EventoCancEConfV100Evento;

    public constructor(props?: CEventoEconfV100EventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100EventoCancEConfV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
