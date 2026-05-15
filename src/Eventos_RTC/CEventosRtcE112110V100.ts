import { CEventosRtcE112110V100DetEvento } from './CEventosRtcE112110V100DetEvento';

export interface IEventosRtcE112110V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE112110V100DetEvento;
}

export class CEventosRtcE112110V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE112110V100DetEvento;

    public constructor(props?: CEventosRtcE112110V100) {
        this["@class"] = ".CEventosRtcE112110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112110V100DetEvento(props.detEvento): undefined;
        }
    }
}
