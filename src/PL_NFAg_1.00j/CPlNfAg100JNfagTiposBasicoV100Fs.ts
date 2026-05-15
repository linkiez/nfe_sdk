export interface IPlNfAg100JNfagTiposBasicoV100Fs {
  "@class"?: string;
  vBCTFS?: unknown;
  pTFS?: unknown;
  vTFS?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Fs {
    public "@class"?: string;

    public vBCTFS?: unknown;
    public pTFS?: unknown;
    public vTFS?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Fs) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Fs";


        if (props) {

        	this.vBCTFS = props.vBCTFS;
        	this.pTFS = props.pTFS;
        	this.vTFS = props.vTFS;
        }
    }
}
