import { CPlNfAg100JDFeTiposBasicosV100CredPres } from './CPlNfAg100JDFeTiposBasicosV100CredPres';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TcCredPres } from './TPlNfAg100JDFeTiposBasicosV100TcCredPres';

export interface IPlNfAg100JDFeTiposBasicosV100CredPresOper {
  "@class"?: string;
  vBCCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  cCredPres?: TPlNfAg100JDFeTiposBasicosV100TcCredPres;
  gIBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;
  gCBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;
}

export class CPlNfAg100JDFeTiposBasicosV100CredPresOper {
    public "@class"?: string;

    public vBCCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public cCredPres?: TPlNfAg100JDFeTiposBasicosV100TcCredPres;
    public gIBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;
    public gCBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100CredPresOper) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100CredPresOper";


        if (props) {

        	this.vBCCredPres = props.vBCCredPres;
        	this.cCredPres = props.cCredPres;
        	this.gIBSCredPres = (props.gIBSCredPres) ? new CPlNfAg100JDFeTiposBasicosV100CredPres(props.gIBSCredPres): undefined;
        	this.gCBSCredPres = (props.gCBSCredPres) ? new CPlNfAg100JDFeTiposBasicosV100CredPres(props.gCBSCredPres): undefined;
        }
    }
}
