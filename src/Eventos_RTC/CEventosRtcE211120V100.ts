import { CEventosRtcE211120V100DetEvento } from './CEventosRtcE211120V100DetEvento';

export interface IEventosRtcE211120V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211120V100DetEvento;
}

export class CEventosRtcE211120V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211120V100DetEvento;

    public constructor(props?: CEventosRtcE211120V100) {
        this["@class"] = ".CEventosRtcE211120V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211120V100DetEvento(props.detEvento): undefined;
        }
    }
}
