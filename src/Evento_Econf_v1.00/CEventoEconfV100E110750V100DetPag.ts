export interface IEventoEconfV100E110750V100DetPag {
  "@class"?: string;
  vPag?: unknown;
  dPag?: unknown;
}

export class CEventoEconfV100E110750V100DetPag {
    public "@class"?: string;

    public vPag?: unknown;
    public dPag?: unknown;

    public constructor(props?: CEventoEconfV100E110750V100DetPag) {
        this["@class"] = ".CEventoEconfV100E110750V100DetPag";


        if (props) {

        	this.vPag = props.vPag;
        	this.dPag = props.dPag;
        }
    }
}
