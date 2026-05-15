import { CEventosRtcE211124V100DetEvento } from './CEventosRtcE211124V100DetEvento';

export interface IEventosRtcE211124V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211124V100DetEvento;
}

export class CEventosRtcE211124V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211124V100DetEvento;

    public constructor(props?: CEventosRtcE211124V100) {
        this["@class"] = ".CEventosRtcE211124V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211124V100DetEvento(props.detEvento): undefined;
        }
    }
}
