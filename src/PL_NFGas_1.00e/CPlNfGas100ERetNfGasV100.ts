import { TPlNfGas100ERetNfGasV100RetNfGas } from './TPlNfGas100ERetNfGasV100RetNfGas';

export interface IPlNfGas100ERetNfGasV100 {
  "@class"?: string;
  retNFGas?: TPlNfGas100ERetNfGasV100RetNfGas;
}

export class CPlNfGas100ERetNfGasV100 {
    public "@class"?: string;

    public retNFGas?: TPlNfGas100ERetNfGasV100RetNfGas;

    public constructor(props?: CPlNfGas100ERetNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetNfGasV100";


        if (props) {

        	this.retNFGas = props.retNFGas;
        }
    }
}
