import { CPlNfGas100ENfgasTiposBasicoV100InfNfGas } from './CPlNfGas100ENfgasTiposBasicoV100InfNfGas';

import { CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl } from './CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl';

export interface IPlNfGas100ENfgasTiposBasicoV100NfGas {
  "@class"?: string;
  unknown?: unknown;
  infNFGas?: CPlNfGas100ENfgasTiposBasicoV100InfNfGas;
  infNFGasSupl?: CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl;
}

export class CPlNfGas100ENfgasTiposBasicoV100NfGas {
    public "@class"?: string;

    public unknown?: unknown;
    public infNFGas?: CPlNfGas100ENfgasTiposBasicoV100InfNfGas;
    public infNFGasSupl?: CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100NfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100NfGas";


        if (props) {

        	this.unknown = props.unknown;
        	this.infNFGas = (props.infNFGas) ? new CPlNfGas100ENfgasTiposBasicoV100InfNfGas(props.infNFGas): undefined;
        	this.infNFGasSupl = (props.infNFGasSupl) ? new CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl(props.infNFGasSupl): undefined;
        }
    }
}
