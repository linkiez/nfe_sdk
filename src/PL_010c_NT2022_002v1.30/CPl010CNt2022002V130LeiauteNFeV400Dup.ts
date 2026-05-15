export interface IPl010CNt2022002V130LeiauteNFeV400Dup {
  "@class"?: string;
  dVenc?: unknown;
  vDup?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Dup {
    public "@class"?: string;

    public dVenc?: unknown;
    public vDup?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Dup) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Dup";


        if (props) {

        	this.dVenc = props.dVenc;
        	this.vDup = props.vDup;
        }
    }
}
