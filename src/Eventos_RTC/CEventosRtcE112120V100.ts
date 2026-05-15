import { CEventosRtcE112120V100DetEvento } from './CEventosRtcE112120V100DetEvento';

export interface IEventosRtcE112120V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE112120V100DetEvento;
}

export class CEventosRtcE112120V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE112120V100DetEvento;

    public constructor(props?: CEventosRtcE112120V100) {
        this["@class"] = ".CEventosRtcE112120V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112120V100DetEvento(props.detEvento): undefined;
        }
    }
}
