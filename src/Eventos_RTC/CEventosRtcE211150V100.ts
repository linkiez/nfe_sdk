import { CEventosRtcE211150V100DetEvento } from './CEventosRtcE211150V100DetEvento';

export interface IEventosRtcE211150V100 {
  "@class"?: string;
  detEvento?: CEventosRtcE211150V100DetEvento;
}

export class CEventosRtcE211150V100 {
    public "@class"?: string;

    public detEvento?: CEventosRtcE211150V100DetEvento;

    public constructor(props?: CEventosRtcE211150V100) {
        this["@class"] = ".CEventosRtcE211150V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211150V100DetEvento(props.detEvento): undefined;
        }
    }
}
