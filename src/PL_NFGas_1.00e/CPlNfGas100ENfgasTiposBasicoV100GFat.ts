import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from './CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

import { CPlNfGas100ENfgasTiposBasicoV100Gpix } from './CPlNfGas100ENfgasTiposBasicoV100Gpix';

import { TPlNfGas100ENfgasTiposBasicoV100Compet } from './TPlNfGas100ENfgasTiposBasicoV100Compet';

export interface IPlNfGas100ENfgasTiposBasicoV100GFat {
  "@class"?: string;
  CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
  dVencFat?: unknown;
  dApresFat?: unknown;
  dProxLeitura?: unknown;
  enderCorresp?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
  gPIX?: CPlNfGas100ENfgasTiposBasicoV100Gpix;
}

export class CPlNfGas100ENfgasTiposBasicoV100GFat {
    public "@class"?: string;

    public CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
    public dVencFat?: unknown;
    public dApresFat?: unknown;
    public dProxLeitura?: unknown;
    public enderCorresp?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
    public gPIX?: CPlNfGas100ENfgasTiposBasicoV100Gpix;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GFat) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GFat";


        if (props) {

        	this.CompetFat = props.CompetFat;
        	this.dVencFat = props.dVencFat;
        	this.dApresFat = props.dApresFat;
        	this.dProxLeitura = props.dProxLeitura;
        	this.enderCorresp = (props.enderCorresp) ? new CPlNfGas100ENfgasTiposBasicoV100EndeEmi(props.enderCorresp): undefined;
        	this.gPIX = (props.gPIX) ? new CPlNfGas100ENfgasTiposBasicoV100Gpix(props.gPIX): undefined;
        }
    }
}
