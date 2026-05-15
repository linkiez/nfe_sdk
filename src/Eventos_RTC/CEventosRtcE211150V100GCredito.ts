export interface IEventosRtcE211150V100GCredito {
  "@class"?: string;
  vCredIBS?: unknown;
  vCredCBS?: unknown;
}

export class CEventosRtcE211150V100GCredito {
    public "@class"?: string;

    public vCredIBS?: unknown;
    public vCredCBS?: unknown;

    public constructor(props?: CEventosRtcE211150V100GCredito) {
        this["@class"] = ".CEventosRtcE211150V100GCredito";


        if (props) {

        	this.vCredIBS = props.vCredIBS;
        	this.vCredCBS = props.vCredCBS;
        }
    }
}
