import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from './CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100TribCompraGov } from './CPlNfAg100JDFeTiposBasicosV100TribCompraGov';

import { CPlNfAg100JDFeTiposBasicosV100TribRegular } from './CPlNfAg100JDFeTiposBasicosV100TribRegular';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Cibs {
  "@class"?: string;
  vBC?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
  gTribRegular?: CPlNfAg100JDFeTiposBasicosV100TribRegular;
  gTribCompraGov?: CPlNfAg100JDFeTiposBasicosV100TribCompraGov;
}

export class CPlNfAg100JDFeTiposBasicosV100Cibs {
    public "@class"?: string;

    public vBC?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
    public gTribRegular?: CPlNfAg100JDFeTiposBasicosV100TribRegular;
    public gTribCompraGov?: CPlNfAg100JDFeTiposBasicosV100TribCompraGov;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Cibs) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Cibs";


        if (props) {

        	this.vBC = props.vBC;
        	this.gCBS = (props.gCBS) ? new CPlNfAg100JDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gTribRegular = (props.gTribRegular) ? new CPlNfAg100JDFeTiposBasicosV100TribRegular(props.gTribRegular): undefined;
        	this.gTribCompraGov = (props.gTribCompraGov) ? new CPlNfAg100JDFeTiposBasicosV100TribCompraGov(props.gTribCompraGov): undefined;
        }
    }
}
