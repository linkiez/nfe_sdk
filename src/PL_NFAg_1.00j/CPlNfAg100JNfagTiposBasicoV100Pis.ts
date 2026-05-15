export interface IPlNfAg100JNfagTiposBasicoV100Pis {
  "@class"?: string;
  vBC?: unknown;
  pPIS?: unknown;
  vPIS?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Pis {
    public "@class"?: string;

    public vBC?: unknown;
    public pPIS?: unknown;
    public vPIS?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Pis) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Pis";


        if (props) {

        	this.vBC = props.vBC;
        	this.pPIS = props.pPIS;
        	this.vPIS = props.vPIS;
        }
    }
}
