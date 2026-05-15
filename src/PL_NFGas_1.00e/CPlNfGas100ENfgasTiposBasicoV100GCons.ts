import { TPlNfGas100ENfgasTiposBasicoV100Compet } from './TPlNfGas100ENfgasTiposBasicoV100Compet';

import { TPlNfGas100ENfgasTiposBasicoV100UMed } from './TPlNfGas100ENfgasTiposBasicoV100UMed';

export interface IPlNfGas100ENfgasTiposBasicoV100GCons {
  "@class"?: string;
  CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
  uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
  medDiaria?: unknown;
  consumo?: unknown;
  vFat?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100GCons {
    public "@class"?: string;

    public CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
    public uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
    public medDiaria?: unknown;
    public consumo?: unknown;
    public vFat?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GCons) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GCons";


        if (props) {

        	this.CompetFat = props.CompetFat;
        	this.uMed = props.uMed;
        	this.medDiaria = props.medDiaria;
        	this.consumo = props.consumo;
        	this.vFat = props.vFat;
        }
    }
}
