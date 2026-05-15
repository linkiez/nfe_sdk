import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from './CPlNfAg100JNfagTiposBasicoV100EndeEmi';

import { CPlNfAg100JNfagTiposBasicoV100Gpix } from './CPlNfAg100JNfagTiposBasicoV100Gpix';

import { TPlNfAg100JNfagTiposBasicoV100Compet } from './TPlNfAg100JNfagTiposBasicoV100Compet';

export interface IPlNfAg100JNfagTiposBasicoV100GFat {
  "@class"?: string;
  CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
  dVencFat?: unknown;
  dApresFat?: unknown;
  dProxLeitura?: unknown;
  enderCorresp?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
  gPIX?: CPlNfAg100JNfagTiposBasicoV100Gpix;
}

export class CPlNfAg100JNfagTiposBasicoV100GFat {
    public "@class"?: string;

    public CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
    public dVencFat?: unknown;
    public dApresFat?: unknown;
    public dProxLeitura?: unknown;
    public enderCorresp?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
    public gPIX?: CPlNfAg100JNfagTiposBasicoV100Gpix;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GFat) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GFat";


        if (props) {

        	this.CompetFat = props.CompetFat;
        	this.dVencFat = props.dVencFat;
        	this.dApresFat = props.dApresFat;
        	this.dProxLeitura = props.dProxLeitura;
        	this.enderCorresp = (props.enderCorresp) ? new CPlNfAg100JNfagTiposBasicoV100EndeEmi(props.enderCorresp): undefined;
        	this.gPIX = (props.gPIX) ? new CPlNfAg100JNfagTiposBasicoV100Gpix(props.gPIX): undefined;
        }
    }
}
