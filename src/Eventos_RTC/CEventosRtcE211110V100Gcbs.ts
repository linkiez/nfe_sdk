export interface IEventosRtcE211110V100Gcbs {
  "@class"?: string;
  pCredPres?: unknown;
  vCredPres?: unknown;
}

export class CEventosRtcE211110V100Gcbs {
    public "@class"?: string;

    public pCredPres?: unknown;
    public vCredPres?: unknown;

    public constructor(props?: CEventosRtcE211110V100Gcbs) {
        this["@class"] = ".CEventosRtcE211110V100Gcbs";


        if (props) {

        	this.pCredPres = props.pCredPres;
        	this.vCredPres = props.vCredPres;
        }
    }
}
