import { TPlNfGas100ENfgasV100NfGas } from './TPlNfGas100ENfgasV100NfGas';

export interface IPlNfGas100ENfgasV100 {
  "@class"?: string;
  nFGas?: TPlNfGas100ENfgasV100NfGas;
}

export class CPlNfGas100ENfgasV100 {
    public "@class"?: string;

    public nFGas?: TPlNfGas100ENfgasV100NfGas;

    public constructor(props?: CPlNfGas100ENfgasV100) {
        this["@class"] = ".CPlNfGas100ENfgasV100";


        if (props) {

        	this.nFGas = props.nFGas;
        }
    }
}
