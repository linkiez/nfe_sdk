import { TPlNfAg100JNfagTiposBasicoV100FatNfAg } from './TPlNfAg100JNfagTiposBasicoV100FatNfAg';

import { TPlNfAg100JNfagTiposBasicoV100FinNfAg } from './TPlNfAg100JNfagTiposBasicoV100FinNfAg';

import { TPlNfAg100JNfagTiposBasicoV100TtpEmis } from './TPlNfAg100JNfagTiposBasicoV100TtpEmis';

export interface IPlNfAg100JNfagTiposBasicoV100Ide {
  "@class"?: string;
  cUF?: unknown;
  tpAmb?: unknown;
  mod?: unknown;
  serie?: unknown;
  nNF?: unknown;
  dhEmi?: unknown;
  tpEmis?: TPlNfAg100JNfagTiposBasicoV100TtpEmis;
  cMunFG?: unknown;
  finNFAg?: TPlNfAg100JNfagTiposBasicoV100FinNfAg;
  tpFat?: TPlNfAg100JNfagTiposBasicoV100FatNfAg;
  gCompraGov?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Ide {
    public "@class"?: string;

    public cUF?: unknown;
    public tpAmb?: unknown;
    public mod?: unknown;
    public serie?: unknown;
    public nNF?: unknown;
    public dhEmi?: unknown;
    public tpEmis?: TPlNfAg100JNfagTiposBasicoV100TtpEmis;
    public cMunFG?: unknown;
    public finNFAg?: TPlNfAg100JNfagTiposBasicoV100FinNfAg;
    public tpFat?: TPlNfAg100JNfagTiposBasicoV100FatNfAg;
    public gCompraGov?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Ide) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Ide";


        if (props) {

        	this.cUF = props.cUF;
        	this.tpAmb = props.tpAmb;
        	this.mod = props.mod;
        	this.serie = props.serie;
        	this.nNF = props.nNF;
        	this.dhEmi = props.dhEmi;
        	this.tpEmis = props.tpEmis;
        	this.cMunFG = props.cMunFG;
        	this.finNFAg = props.finNFAg;
        	this.tpFat = props.tpFat;
        	this.gCompraGov = props.gCompraGov;
        }
    }
}
