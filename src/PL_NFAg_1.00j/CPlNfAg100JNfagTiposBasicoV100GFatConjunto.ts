export interface IPlNfAg100JNfagTiposBasicoV100GFatConjunto {
  "@class"?: string;
  chNFAgFat?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100GFatConjunto {
    public "@class"?: string;

    public chNFAgFat?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GFatConjunto) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GFatConjunto";


        if (props) {

        	this.chNFAgFat = props.chNFAgFat;
        }
    }
}
