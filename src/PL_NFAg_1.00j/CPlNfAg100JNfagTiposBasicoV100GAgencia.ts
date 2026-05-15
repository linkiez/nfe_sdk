import { CPlNfAg100JNfagTiposBasicoV100GHistCons } from './CPlNfAg100JNfagTiposBasicoV100GHistCons';

export interface IPlNfAg100JNfagTiposBasicoV100GAgencia {
  "@class"?: string;
  dEmissSelo?: unknown;
  gHistCons?: CPlNfAg100JNfagTiposBasicoV100GHistCons;
}

export class CPlNfAg100JNfagTiposBasicoV100GAgencia {
    public "@class"?: string;

    public dEmissSelo?: unknown;
    public gHistCons?: CPlNfAg100JNfagTiposBasicoV100GHistCons;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GAgencia) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GAgencia";


        if (props) {

        	this.dEmissSelo = props.dEmissSelo;
        	this.gHistCons = (props.gHistCons) ? new CPlNfAg100JNfagTiposBasicoV100GHistCons(props.gHistCons): undefined;
        }
    }
}
