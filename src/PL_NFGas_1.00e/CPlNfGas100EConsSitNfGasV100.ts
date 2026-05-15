import { TPlNfGas100EConsSitNfGasV100ConsSitNfGas } from './TPlNfGas100EConsSitNfGasV100ConsSitNfGas';

export interface IPlNfGas100EConsSitNfGasV100 {
  "@class"?: string;
  consSitNFGas?: TPlNfGas100EConsSitNfGasV100ConsSitNfGas;
}

export class CPlNfGas100EConsSitNfGasV100 {
    public "@class"?: string;

    public consSitNFGas?: TPlNfGas100EConsSitNfGasV100ConsSitNfGas;

    public constructor(props?: CPlNfGas100EConsSitNfGasV100) {
        this["@class"] = ".CPlNfGas100EConsSitNfGasV100";


        if (props) {

        	this.consSitNFGas = props.consSitNFGas;
        }
    }
}
