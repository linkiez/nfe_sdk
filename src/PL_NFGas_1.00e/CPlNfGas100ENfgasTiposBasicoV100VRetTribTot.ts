export interface IPlNfGas100ENfgasTiposBasicoV100VRetTribTot {
  "@class"?: string;
  vRetPIS?: unknown;
  vRetCofins?: unknown;
  vRetCSLL?: unknown;
  vIRRF?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100VRetTribTot {
    public "@class"?: string;

    public vRetPIS?: unknown;
    public vRetCofins?: unknown;
    public vRetCSLL?: unknown;
    public vIRRF?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100VRetTribTot) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100VRetTribTot";


        if (props) {

        	this.vRetPIS = props.vRetPIS;
        	this.vRetCofins = props.vRetCofins;
        	this.vRetCSLL = props.vRetCSLL;
        	this.vIRRF = props.vIRRF;
        }
    }
}
