export interface IPlNfGas100EProcNfGasV100NfgasProc {
  "@class"?: string;
  NFGas?: unknown;
  protNFGas?: unknown;
}

export class CPlNfGas100EProcNfGasV100NfgasProc {
    public "@class"?: string;

    public NFGas?: unknown;
    public protNFGas?: unknown;

    public constructor(props?: CPlNfGas100EProcNfGasV100NfgasProc) {
        this["@class"] = ".CPlNfGas100EProcNfGasV100NfgasProc";


        if (props) {

        	this.NFGas = props.NFGas;
        	this.protNFGas = props.protNFGas;
        }
    }
}
