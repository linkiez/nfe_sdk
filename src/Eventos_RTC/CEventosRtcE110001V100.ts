import { CEventosRtcE110001V100DetEvento } from './CEventosRtcE110001V100DetEvento';

export interface IEventosRtcE110001V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE110001V100DetEvento;
}

export class CEventosRtcE110001V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE110001V100DetEvento;

    public constructor(props?: CEventosRtcE110001V100) {
        this["@class"] = ".CEventosRtcE110001V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE110001V100DetEvento(props.detEvento): undefined;
        }
    }
}
