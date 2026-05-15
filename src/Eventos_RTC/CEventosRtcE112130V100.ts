import { CEventosRtcE112130V100DetEvento } from './CEventosRtcE112130V100DetEvento';

export interface IEventosRtcE112130V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE112130V100DetEvento;
}

export class CEventosRtcE112130V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE112130V100DetEvento;

    public constructor(props?: CEventosRtcE112130V100) {
        this["@class"] = ".CEventosRtcE112130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112130V100DetEvento(props.detEvento): undefined;
        }
    }
}
