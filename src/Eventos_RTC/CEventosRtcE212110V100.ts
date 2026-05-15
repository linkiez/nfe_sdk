import { CEventosRtcE212110V100DetEvento } from './CEventosRtcE212110V100DetEvento';

export interface IEventosRtcE212110V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE212110V100DetEvento;
}

export class CEventosRtcE212110V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE212110V100DetEvento;

    public constructor(props?: CEventosRtcE212110V100) {
        this["@class"] = ".CEventosRtcE212110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE212110V100DetEvento(props.detEvento): undefined;
        }
    }
}
