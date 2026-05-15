import { CEventoEconfV100E110750V100DetEvento } from './CEventoEconfV100E110750V100DetEvento';

export interface IEventoEconfV100E110750V100 {
  "@class"?: string;
  detEvento?: CEventoEconfV100E110750V100DetEvento;
}

export class CEventoEconfV100E110750V100 {
    public "@class"?: string;

    public detEvento?: CEventoEconfV100E110750V100DetEvento;

    public constructor(props?: CEventoEconfV100E110750V100) {
        this["@class"] = ".CEventoEconfV100E110750V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoEconfV100E110750V100DetEvento(props.detEvento): undefined;
        }
    }
}
