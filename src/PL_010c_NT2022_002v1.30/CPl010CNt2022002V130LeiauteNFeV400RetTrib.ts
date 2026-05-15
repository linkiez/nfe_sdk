export interface IPl010CNt2022002V130LeiauteNFeV400RetTrib {
  "@class"?: string;
  vRetPIS?: unknown;
  vRetCOFINS?: unknown;
  vRetCSLL?: unknown;
  vBCIRRF?: unknown;
  vIRRF?: unknown;
  vBCRetPrev?: unknown;
  vRetPrev?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400RetTrib {
    public "@class"?: string;

    public vRetPIS?: unknown;
    public vRetCOFINS?: unknown;
    public vRetCSLL?: unknown;
    public vBCIRRF?: unknown;
    public vIRRF?: unknown;
    public vBCRetPrev?: unknown;
    public vRetPrev?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetTrib) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetTrib";


        if (props) {

        	this.vRetPIS = props.vRetPIS;
        	this.vRetCOFINS = props.vRetCOFINS;
        	this.vRetCSLL = props.vRetCSLL;
        	this.vBCIRRF = props.vBCIRRF;
        	this.vIRRF = props.vIRRF;
        	this.vBCRetPrev = props.vBCRetPrev;
        	this.vRetPrev = props.vRetPrev;
        }
    }
}
