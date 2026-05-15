import { CPlNfGas100ENfgasTiposBasicoV100GCons } from './CPlNfGas100ENfgasTiposBasicoV100GCons';

export interface IPlNfGas100ENfgasTiposBasicoV100GHistCons {
  "@class"?: string;
  gCons?: CPlNfGas100ENfgasTiposBasicoV100GCons;
  medMensal?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100GHistCons {
    public "@class"?: string;

    public gCons?: CPlNfGas100ENfgasTiposBasicoV100GCons;
    public medMensal?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GHistCons) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GHistCons";


        if (props) {

        	this.gCons = (props.gCons) ? new CPlNfGas100ENfgasTiposBasicoV100GCons(props.gCons): undefined;
        	this.medMensal = props.medMensal;
        }
    }
}
