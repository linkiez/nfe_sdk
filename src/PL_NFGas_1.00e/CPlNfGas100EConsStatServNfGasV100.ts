import { TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas } from './TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas';

export interface IPlNfGas100EConsStatServNfGasV100 {
  "@class"?: string;
  consStatServNFGas?: TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas;
}

export class CPlNfGas100EConsStatServNfGasV100 {
    public "@class"?: string;

    public consStatServNFGas?: TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas;

    public constructor(props?: CPlNfGas100EConsStatServNfGasV100) {
        this["@class"] = ".CPlNfGas100EConsStatServNfGasV100";


        if (props) {

        	this.consStatServNFGas = props.consStatServNFGas;
        }
    }
}
