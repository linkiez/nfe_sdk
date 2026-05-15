import { CEventosRtcE112140V100DetEvento } from './CEventosRtcE112140V100DetEvento';

export interface IEventosRtcE112140V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE112140V100DetEvento;
}

export class CEventosRtcE112140V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE112140V100DetEvento;

    public constructor(props?: CEventosRtcE112140V100) {
        this["@class"] = ".CEventosRtcE112140V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112140V100DetEvento(props.detEvento): undefined;
        }
    }
}
