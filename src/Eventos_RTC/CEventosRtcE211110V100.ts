import { CEventosRtcE211110V100DetEvento } from './CEventosRtcE211110V100DetEvento';

export interface IEventosRtcE211110V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211110V100DetEvento;
}

export class CEventosRtcE211110V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211110V100DetEvento;

    public constructor(props?: CEventosRtcE211110V100) {
        this["@class"] = ".CEventosRtcE211110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211110V100DetEvento(props.detEvento): undefined;
        }
    }
}
