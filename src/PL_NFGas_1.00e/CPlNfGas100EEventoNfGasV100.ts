import { TPlNfGas100EEventoNfGasV100EventoNfGas } from './TPlNfGas100EEventoNfGasV100EventoNfGas';

export interface IPlNfGas100EEventoNfGasV100 {
  "@class"?: string;
  eventoNFGas?: TPlNfGas100EEventoNfGasV100EventoNfGas;
}

export class CPlNfGas100EEventoNfGasV100 {
    public "@class"?: string;

    public eventoNFGas?: TPlNfGas100EEventoNfGasV100EventoNfGas;

    public constructor(props?: CPlNfGas100EEventoNfGasV100) {
        this["@class"] = ".CPlNfGas100EEventoNfGasV100";


        if (props) {

        	this.eventoNFGas = props.eventoNFGas;
        }
    }
}
