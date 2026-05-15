export interface IPlNfGas100ENfgasTiposBasicoV100IcmsTot {
  "@class"?: string;
  vBC?: unknown;
  vICMS?: unknown;
  vICMSDeson?: unknown;
  vFCP?: unknown;
  vBCST?: unknown;
  vST?: unknown;
  vFCPST?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100IcmsTot {
    public "@class"?: string;

    public vBC?: unknown;
    public vICMS?: unknown;
    public vICMSDeson?: unknown;
    public vFCP?: unknown;
    public vBCST?: unknown;
    public vST?: unknown;
    public vFCPST?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100IcmsTot) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100IcmsTot";


        if (props) {

        	this.vBC = props.vBC;
        	this.vICMS = props.vICMS;
        	this.vICMSDeson = props.vICMSDeson;
        	this.vFCP = props.vFCP;
        	this.vBCST = props.vBCST;
        	this.vST = props.vST;
        	this.vFCPST = props.vFCPST;
        }
    }
}
