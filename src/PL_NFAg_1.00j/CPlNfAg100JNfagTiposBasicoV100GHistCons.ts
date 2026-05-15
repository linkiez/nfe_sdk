import { CPlNfAg100JNfagTiposBasicoV100GCons } from './CPlNfAg100JNfagTiposBasicoV100GCons';

export interface IPlNfAg100JNfagTiposBasicoV100GHistCons {
  "@class"?: string;
  gCons?: CPlNfAg100JNfagTiposBasicoV100GCons;
  medMensal?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100GHistCons {
    public "@class"?: string;

    public gCons?: CPlNfAg100JNfagTiposBasicoV100GCons;
    public medMensal?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GHistCons) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GHistCons";


        if (props) {

        	this.gCons = (props.gCons) ? new CPlNfAg100JNfagTiposBasicoV100GCons(props.gCons): undefined;
        	this.medMensal = props.medMensal;
        }
    }
}
