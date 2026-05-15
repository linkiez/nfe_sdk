import { CEventosRtcE212120V100DetEvento } from './CEventosRtcE212120V100DetEvento';

export interface IEventosRtcE212120V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE212120V100DetEvento;
}

export class CEventosRtcE212120V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE212120V100DetEvento;

    public constructor(props?: CEventosRtcE212120V100) {
        this["@class"] = ".CEventosRtcE212120V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE212120V100DetEvento(props.detEvento): undefined;
        }
    }
}
