import { CEventoEconfV100E110751V100DetEvento } from './CEventoEconfV100E110751V100DetEvento';

export interface IEventoEconfV100E110751V100 {
  "@class"?: string;
  detEvento?: CEventoEconfV100E110751V100DetEvento;
}

export class CEventoEconfV100E110751V100 {
    public "@class"?: string;

    public detEvento?: CEventoEconfV100E110751V100DetEvento;

    public constructor(props?: CEventoEconfV100E110751V100) {
        this["@class"] = ".CEventoEconfV100E110751V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoEconfV100E110751V100DetEvento(props.detEvento): undefined;
        }
    }
}
