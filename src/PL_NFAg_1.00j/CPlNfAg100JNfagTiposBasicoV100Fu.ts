export interface IPlNfAg100JNfagTiposBasicoV100Fu {
  "@class"?: string;
  vBCTFU?: unknown;
  pTFU?: unknown;
  vTFU?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Fu {
    public "@class"?: string;

    public vBCTFU?: unknown;
    public pTFU?: unknown;
    public vTFU?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Fu) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Fu";


        if (props) {

        	this.vBCTFU = props.vBCTFU;
        	this.pTFU = props.pTFU;
        	this.vTFU = props.vTFU;
        }
    }
}
