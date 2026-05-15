import { TPlNfAg100JNfagTiposBasicoV100ProcessoAg } from './TPlNfAg100JNfagTiposBasicoV100ProcessoAg';

export interface IPlNfAg100JNfagTiposBasicoV100GProc {
  "@class"?: string;
  tpProc?: TPlNfAg100JNfagTiposBasicoV100ProcessoAg;
}

export class CPlNfAg100JNfagTiposBasicoV100GProc {
    public "@class"?: string;

    public tpProc?: TPlNfAg100JNfagTiposBasicoV100ProcessoAg;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GProc) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GProc";


        if (props) {

        	this.tpProc = props.tpProc;
        }
    }
}
