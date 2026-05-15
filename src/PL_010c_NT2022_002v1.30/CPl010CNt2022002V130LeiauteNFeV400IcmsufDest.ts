export interface IPl010CNt2022002V130LeiauteNFeV400IcmsufDest {
  "@class"?: string;
  vBCUFDest?: unknown;
  vBCFCPUFDest?: unknown;
  pFCPUFDest?: unknown;
  pICMSUFDest?: unknown;
  pICMSInterPart?: unknown;
  vFCPUFDest?: unknown;
  vICMSUFDest?: unknown;
  vICMSUFRemet?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400IcmsufDest {
    public "@class"?: string;

    public vBCUFDest?: unknown;
    public vBCFCPUFDest?: unknown;
    public pFCPUFDest?: unknown;
    public pICMSUFDest?: unknown;
    public pICMSInterPart?: unknown;
    public vFCPUFDest?: unknown;
    public vICMSUFDest?: unknown;
    public vICMSUFRemet?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400IcmsufDest) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400IcmsufDest";


        if (props) {

        	this.vBCUFDest = props.vBCUFDest;
        	this.vBCFCPUFDest = props.vBCFCPUFDest;
        	this.pFCPUFDest = props.pFCPUFDest;
        	this.pICMSUFDest = props.pICMSUFDest;
        	this.pICMSInterPart = props.pICMSInterPart;
        	this.vFCPUFDest = props.vFCPUFDest;
        	this.vICMSUFDest = props.vICMSUFDest;
        	this.vICMSUFRemet = props.vICMSUFRemet;
        }
    }
}
