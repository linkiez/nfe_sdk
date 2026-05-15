import { CEventosRtcE211130V100DetEvento } from './CEventosRtcE211130V100DetEvento';

export interface IEventosRtcE211130V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211130V100DetEvento;
}

export class CEventosRtcE211130V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211130V100DetEvento;

    public constructor(props?: CEventosRtcE211130V100) {
        this["@class"] = ".CEventosRtcE211130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211130V100DetEvento(props.detEvento): undefined;
        }
    }
}
