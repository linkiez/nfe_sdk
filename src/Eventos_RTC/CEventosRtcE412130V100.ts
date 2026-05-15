import { CEventosRtcE412130V100DetEvento } from './CEventosRtcE412130V100DetEvento';

export interface IEventosRtcE412130V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE412130V100DetEvento;
}

export class CEventosRtcE412130V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE412130V100DetEvento;

    public constructor(props?: CEventosRtcE412130V100) {
        this["@class"] = ".CEventosRtcE412130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE412130V100DetEvento(props.detEvento): undefined;
        }
    }
}
