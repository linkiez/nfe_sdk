import { CPlNfGas100EProcNfGasV100NfgasProc } from './CPlNfGas100EProcNfGasV100NfgasProc';

export interface IPlNfGas100EProcNfGasV100 {
  "@class"?: string;
  nfgasProc?: CPlNfGas100EProcNfGasV100NfgasProc;
}

export class CPlNfGas100EProcNfGasV100 {
    public "@class"?: string;

    public nfgasProc?: CPlNfGas100EProcNfGasV100NfgasProc;

    public constructor(props?: CPlNfGas100EProcNfGasV100) {
        this["@class"] = ".CPlNfGas100EProcNfGasV100";


        if (props) {

        	this.nfgasProc = (props.nfgasProc) ? new CPlNfGas100EProcNfGasV100NfgasProc(props.nfgasProc): undefined;
        }
    }
}
