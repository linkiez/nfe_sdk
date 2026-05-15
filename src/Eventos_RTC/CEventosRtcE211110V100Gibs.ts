export interface IEventosRtcE211110V100Gibs {
  "@class"?: string;
  pCredPres?: unknown;
  vCredPres?: unknown;
}

export class CEventosRtcE211110V100Gibs {
    public "@class"?: string;

    public pCredPres?: unknown;
    public vCredPres?: unknown;

    public constructor(props?: CEventosRtcE211110V100Gibs) {
        this["@class"] = ".CEventosRtcE211110V100Gibs";


        if (props) {

        	this.pCredPres = props.pCredPres;
        	this.vCredPres = props.vCredPres;
        }
    }
}
