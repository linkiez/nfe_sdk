import { CPlNfGas100ENfgasTiposBasicoV100GHistCons } from './CPlNfGas100ENfgasTiposBasicoV100GHistCons';

export interface IPlNfGas100ENfgasTiposBasicoV100GAgencia {
  "@class"?: string;
  gHistCons?: CPlNfGas100ENfgasTiposBasicoV100GHistCons;
}

export class CPlNfGas100ENfgasTiposBasicoV100GAgencia {
    public "@class"?: string;

    public gHistCons?: CPlNfGas100ENfgasTiposBasicoV100GHistCons;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GAgencia) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GAgencia";


        if (props) {

        	this.gHistCons = (props.gHistCons) ? new CPlNfGas100ENfgasTiposBasicoV100GHistCons(props.gHistCons): undefined;
        }
    }
}
