export interface IPlNfAg100JNfagTiposBasicoV100VRetTribTot {
  "@class"?: string;
  vRetPIS?: unknown;
  vRetCofins?: unknown;
  vRetCSLL?: unknown;
  vIRRF?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100VRetTribTot {
    public "@class"?: string;

    public vRetPIS?: unknown;
    public vRetCofins?: unknown;
    public vRetCSLL?: unknown;
    public vIRRF?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100VRetTribTot) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100VRetTribTot";


        if (props) {

        	this.vRetPIS = props.vRetPIS;
        	this.vRetCofins = props.vRetCofins;
        	this.vRetCSLL = props.vRetCSLL;
        	this.vIRRF = props.vIRRF;
        }
    }
}
