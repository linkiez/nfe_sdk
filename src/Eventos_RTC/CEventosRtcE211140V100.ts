import { CEventosRtcE211140V100DetEvento } from './CEventosRtcE211140V100DetEvento';

export interface IEventosRtcE211140V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211140V100DetEvento;
}

export class CEventosRtcE211140V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211140V100DetEvento;

    public constructor(props?: CEventosRtcE211140V100) {
        this["@class"] = ".CEventosRtcE211140V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211140V100DetEvento(props.detEvento): undefined;
        }
    }
}
