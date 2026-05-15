export interface IPlNfAg100JNfagTiposBasicoV100Cofins {
  "@class"?: string;
  vBC?: unknown;
  pCOFINS?: unknown;
  vCOFINS?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Cofins {
    public "@class"?: string;

    public vBC?: unknown;
    public pCOFINS?: unknown;
    public vCOFINS?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Cofins) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Cofins";


        if (props) {

        	this.vBC = props.vBC;
        	this.pCOFINS = props.pCOFINS;
        	this.vCOFINS = props.vCOFINS;
        }
    }
}
