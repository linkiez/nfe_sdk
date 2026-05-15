export interface IPl010CNt2022002V130LeiauteNFeV400Fat {
  "@class"?: string;
  vOrig?: unknown;
  vDesc?: unknown;
  vLiq?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Fat {
    public "@class"?: string;

    public vOrig?: unknown;
    public vDesc?: unknown;
    public vLiq?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Fat) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Fat";


        if (props) {

        	this.vOrig = props.vOrig;
        	this.vDesc = props.vDesc;
        	this.vLiq = props.vLiq;
        }
    }
}
