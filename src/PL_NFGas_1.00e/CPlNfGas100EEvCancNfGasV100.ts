import { CPlNfGas100EEvCancNfGasV100EvCancNfGas } from './CPlNfGas100EEvCancNfGasV100EvCancNfGas';

export interface IPlNfGas100EEvCancNfGasV100 {
  "@class"?: string;
  evCancNFGas?: CPlNfGas100EEvCancNfGasV100EvCancNfGas;
}

export class CPlNfGas100EEvCancNfGasV100 {
    public "@class"?: string;

    public evCancNFGas?: CPlNfGas100EEvCancNfGasV100EvCancNfGas;

    public constructor(props?: CPlNfGas100EEvCancNfGasV100) {
        this["@class"] = ".CPlNfGas100EEvCancNfGasV100";


        if (props) {

        	this.evCancNFGas = (props.evCancNFGas) ? new CPlNfGas100EEvCancNfGasV100EvCancNfGas(props.evCancNFGas): undefined;
        }
    }
}
