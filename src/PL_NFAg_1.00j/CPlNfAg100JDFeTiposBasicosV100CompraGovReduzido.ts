import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100EnteGov } from './TPlNfAg100JDFeTiposBasicosV100EnteGov';

import { TPlNfAg100JDFeTiposBasicosV100OperCompraGov } from './TPlNfAg100JDFeTiposBasicosV100OperCompraGov';

export interface IPlNfAg100JDFeTiposBasicosV100CompraGovReduzido {
  "@class"?: string;
  tpEnteGov?: TPlNfAg100JDFeTiposBasicosV100EnteGov;
  pRedutor?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  tpOperGov?: TPlNfAg100JDFeTiposBasicosV100OperCompraGov;
}

export class CPlNfAg100JDFeTiposBasicosV100CompraGovReduzido {
    public "@class"?: string;

    public tpEnteGov?: TPlNfAg100JDFeTiposBasicosV100EnteGov;
    public pRedutor?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public tpOperGov?: TPlNfAg100JDFeTiposBasicosV100OperCompraGov;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100CompraGovReduzido) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100CompraGovReduzido";


        if (props) {

        	this.tpEnteGov = props.tpEnteGov;
        	this.pRedutor = props.pRedutor;
        	this.tpOperGov = props.tpOperGov;
        }
    }
}
