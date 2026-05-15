import { TPlNfGas100ENfgasTiposBasicoV100MotSub } from './TPlNfGas100ENfgasTiposBasicoV100MotSub';

export interface IPlNfGas100ENfgasTiposBasicoV100GSub {
  "@class"?: string;
  motSub?: TPlNfGas100ENfgasTiposBasicoV100MotSub;
}

export class CPlNfGas100ENfgasTiposBasicoV100GSub {
    public "@class"?: string;

    public motSub?: TPlNfGas100ENfgasTiposBasicoV100MotSub;

    //choice

    public chNFGas(arg: unknown) {
        delete((this as any).gNF);
        (this as any).chNFGas = arg;
    }

    //choice

    public gNF(arg: unknown) {
        delete((this as any).chNFGas);
        (this as any).gNF = arg;
    }

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GSub) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GSub";


        if (props) {

        	this.motSub = props.motSub;
        }
    }
}
