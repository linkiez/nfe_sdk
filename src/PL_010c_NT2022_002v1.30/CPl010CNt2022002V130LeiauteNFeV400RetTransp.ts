export interface IPl010CNt2022002V130LeiauteNFeV400RetTransp {
  "@class"?: string;
  vServ?: unknown;
  vBCRet?: unknown;
  pICMSRet?: unknown;
  vICMSRet?: unknown;
  cMunFG?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400RetTransp {
    public "@class"?: string;

    public vServ?: unknown;
    public vBCRet?: unknown;
    public pICMSRet?: unknown;
    public vICMSRet?: unknown;
    public cMunFG?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetTransp) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetTransp";


        if (props) {

        	this.vServ = props.vServ;
        	this.vBCRet = props.vBCRet;
        	this.pICMSRet = props.pICMSRet;
        	this.vICMSRet = props.vICMSRet;
        	this.cMunFG = props.cMunFG;
        }
    }
}
