import { TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas } from './TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas';

export interface IPlNfGas100ERetConsSitNfGasV100 {
  "@class"?: string;
  retConsSitNFGas?: TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas;
}

export class CPlNfGas100ERetConsSitNfGasV100 {
    public "@class"?: string;

    public retConsSitNFGas?: TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas;

    public constructor(props?: CPlNfGas100ERetConsSitNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetConsSitNfGasV100";


        if (props) {

        	this.retConsSitNFGas = props.retConsSitNFGas;
        }
    }
}
