import { CEventoEconfV100E110750V100DetPag } from './CEventoEconfV100E110750V100DetPag';

export interface IEventoEconfV100E110750V100DetEvento {
  "@class"?: string;
  verAplic?: unknown;
  detPag?: CEventoEconfV100E110750V100DetPag;
}

export class CEventoEconfV100E110750V100DetEvento {
    public "@class"?: string;

    public verAplic?: unknown;
    public detPag?: CEventoEconfV100E110750V100DetPag;

    public constructor(props?: CEventoEconfV100E110750V100DetEvento) {
        this["@class"] = ".CEventoEconfV100E110750V100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.detPag = (props.detPag) ? new CEventoEconfV100E110750V100DetPag(props.detPag): undefined;
        }
    }
}
