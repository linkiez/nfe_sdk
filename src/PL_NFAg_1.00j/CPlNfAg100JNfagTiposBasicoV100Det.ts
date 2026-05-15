import { CPlNfAg100JNfagTiposBasicoV100GProcRef } from './CPlNfAg100JNfagTiposBasicoV100GProcRef';

import { CPlNfAg100JNfagTiposBasicoV100GTarif } from './CPlNfAg100JNfagTiposBasicoV100GTarif';

import { CPlNfAg100JNfagTiposBasicoV100Imposto } from './CPlNfAg100JNfagTiposBasicoV100Imposto';

import { CPlNfAg100JNfagTiposBasicoV100Prod } from './CPlNfAg100JNfagTiposBasicoV100Prod';

export interface IPlNfAg100JNfagTiposBasicoV100Det {
  "@class"?: string;
  gTarif?: CPlNfAg100JNfagTiposBasicoV100GTarif;
  prod?: CPlNfAg100JNfagTiposBasicoV100Prod;
  imposto?: CPlNfAg100JNfagTiposBasicoV100Imposto;
  gProcRef?: CPlNfAg100JNfagTiposBasicoV100GProcRef;
}

export class CPlNfAg100JNfagTiposBasicoV100Det {
    public "@class"?: string;

    public gTarif?: CPlNfAg100JNfagTiposBasicoV100GTarif;
    public prod?: CPlNfAg100JNfagTiposBasicoV100Prod;
    public imposto?: CPlNfAg100JNfagTiposBasicoV100Imposto;
    public gProcRef?: CPlNfAg100JNfagTiposBasicoV100GProcRef;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Det) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Det";


        if (props) {

        	this.gTarif = (props.gTarif) ? new CPlNfAg100JNfagTiposBasicoV100GTarif(props.gTarif): undefined;
        	this.prod = (props.prod) ? new CPlNfAg100JNfagTiposBasicoV100Prod(props.prod): undefined;
        	this.imposto = (props.imposto) ? new CPlNfAg100JNfagTiposBasicoV100Imposto(props.imposto): undefined;
        	this.gProcRef = (props.gProcRef) ? new CPlNfAg100JNfagTiposBasicoV100GProcRef(props.gProcRef): undefined;
        }
    }
}
