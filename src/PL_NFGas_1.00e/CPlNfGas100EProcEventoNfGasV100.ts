import { TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas } from './TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas';

export interface IPlNfGas100EProcEventoNfGasV100 {
  "@class"?: string;
  procEventoNFGas?: TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas;
}

export class CPlNfGas100EProcEventoNfGasV100 {
    public "@class"?: string;

    public procEventoNFGas?: TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas;

    public constructor(props?: CPlNfGas100EProcEventoNfGasV100) {
        this["@class"] = ".CPlNfGas100EProcEventoNfGasV100";


        if (props) {

        	this.procEventoNFGas = props.procEventoNFGas;
        }
    }
}
