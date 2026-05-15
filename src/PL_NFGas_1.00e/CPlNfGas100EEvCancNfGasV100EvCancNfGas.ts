export interface IPlNfGas100EEvCancNfGasV100EvCancNfGas {
  "@class"?: string;
  nProt?: unknown;
  xJust?: unknown;
}

export class CPlNfGas100EEvCancNfGasV100EvCancNfGas {
    public "@class"?: string;

    public nProt?: unknown;
    public xJust?: unknown;

    public constructor(props?: CPlNfGas100EEvCancNfGasV100EvCancNfGas) {
        this["@class"] = ".CPlNfGas100EEvCancNfGasV100EvCancNfGas";


        if (props) {

        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        }
    }
}
