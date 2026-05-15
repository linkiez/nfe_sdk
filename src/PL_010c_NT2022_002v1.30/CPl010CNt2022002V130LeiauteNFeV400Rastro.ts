export interface IPl010CNt2022002V130LeiauteNFeV400Rastro {
  "@class"?: string;
  qLote?: unknown;
  dFab?: unknown;
  dVal?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Rastro {
    public "@class"?: string;

    public qLote?: unknown;
    public dFab?: unknown;
    public dVal?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Rastro) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Rastro";


        if (props) {

        	this.qLote = props.qLote;
        	this.dFab = props.dFab;
        	this.dVal = props.dVal;
        }
    }
}
