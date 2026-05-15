import { TPlNfGas100ERetEventoNfGasV100RetEventoNfGas } from './TPlNfGas100ERetEventoNfGasV100RetEventoNfGas';

export interface IPlNfGas100ERetEventoNfGasV100 {
  "@class"?: string;
  retEventoNFGas?: TPlNfGas100ERetEventoNfGasV100RetEventoNfGas;
}

export class CPlNfGas100ERetEventoNfGasV100 {
    public "@class"?: string;

    public retEventoNFGas?: TPlNfGas100ERetEventoNfGasV100RetEventoNfGas;

    public constructor(props?: CPlNfGas100ERetEventoNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetEventoNfGasV100";


        if (props) {

        	this.retEventoNFGas = props.retEventoNFGas;
        }
    }
}
