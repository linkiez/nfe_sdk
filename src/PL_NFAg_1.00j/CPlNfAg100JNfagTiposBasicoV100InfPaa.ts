export interface IPlNfAg100JNfagTiposBasicoV100InfPaa {
  "@class"?: string;
  CNPJPAA?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100InfPaa {
    public "@class"?: string;

    public CNPJPAA?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100InfPaa) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100InfPaa";


        if (props) {

        	this.CNPJPAA = props.CNPJPAA;
        }
    }
}
