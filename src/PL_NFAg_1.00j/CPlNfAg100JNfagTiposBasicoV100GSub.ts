import { TPlNfAg100JNfagTiposBasicoV100MotSubAg } from './TPlNfAg100JNfagTiposBasicoV100MotSubAg';

export interface IPlNfAg100JNfagTiposBasicoV100GSub {
  "@class"?: string;
  chNFAg?: unknown;
  motSub?: TPlNfAg100JNfagTiposBasicoV100MotSubAg;
}

export class CPlNfAg100JNfagTiposBasicoV100GSub {
    public "@class"?: string;

    public chNFAg?: unknown;
    public motSub?: TPlNfAg100JNfagTiposBasicoV100MotSubAg;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GSub) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GSub";


        if (props) {

        	this.chNFAg = props.chNFAg;
        	this.motSub = props.motSub;
        }
    }
}
