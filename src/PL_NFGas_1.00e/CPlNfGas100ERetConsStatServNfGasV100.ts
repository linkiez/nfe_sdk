import { TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas } from './TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas';

export interface IPlNfGas100ERetConsStatServNfGasV100 {
  "@class"?: string;
  retConsStatServNFGas?: TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas;
}

export class CPlNfGas100ERetConsStatServNfGasV100 {
    public "@class"?: string;

    public retConsStatServNFGas?: TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas;

    public constructor(props?: CPlNfGas100ERetConsStatServNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetConsStatServNfGasV100";


        if (props) {

        	this.retConsStatServNFGas = props.retConsStatServNFGas;
        }
    }
}
