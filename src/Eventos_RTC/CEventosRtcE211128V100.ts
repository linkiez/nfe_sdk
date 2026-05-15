import { CEventosRtcE211128V100DetEvento } from './CEventosRtcE211128V100DetEvento';

export interface IEventosRtcE211128V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211128V100DetEvento;
}

export class CEventosRtcE211128V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211128V100DetEvento;

    public constructor(props?: CEventosRtcE211128V100) {
        this["@class"] = ".CEventosRtcE211128V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211128V100DetEvento(props.detEvento): undefined;
        }
    }
}
