import { TPlNfGas100ENfgasTiposBasicoV100UMed } from './TPlNfGas100ENfgasTiposBasicoV100UMed';

export interface IPlNfGas100ENfgasTiposBasicoV100Medida {
  "@class"?: string;
  uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
  vMed?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100Medida {
    public "@class"?: string;

    public uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
    public vMed?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Medida) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Medida";


        if (props) {

        	this.uMed = props.uMed;
        	this.vMed = props.vMed;
        }
    }
}
