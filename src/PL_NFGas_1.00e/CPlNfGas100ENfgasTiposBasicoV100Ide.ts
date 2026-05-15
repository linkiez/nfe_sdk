import { TPlNfGas100ENfgasTiposBasicoV100FatNf } from './TPlNfGas100ENfgasTiposBasicoV100FatNf';

import { TPlNfGas100ENfgasTiposBasicoV100FinNf } from './TPlNfGas100ENfgasTiposBasicoV100FinNf';

import { TPlNfGas100ENfgasTiposBasicoV100TtpEmis } from './TPlNfGas100ENfgasTiposBasicoV100TtpEmis';

export interface IPlNfGas100ENfgasTiposBasicoV100Ide {
  "@class"?: string;
  cUF?: unknown;
  tpAmb?: unknown;
  mod?: unknown;
  serie?: unknown;
  nNF?: unknown;
  dhEmi?: unknown;
  tpEmis?: TPlNfGas100ENfgasTiposBasicoV100TtpEmis;
  cMunFG?: unknown;
  finNFGas?: TPlNfGas100ENfgasTiposBasicoV100FinNf;
  tpFat?: TPlNfGas100ENfgasTiposBasicoV100FatNf;
  gCompraGov?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100Ide {
    public "@class"?: string;

    public cUF?: unknown;
    public tpAmb?: unknown;
    public mod?: unknown;
    public serie?: unknown;
    public nNF?: unknown;
    public dhEmi?: unknown;
    public tpEmis?: TPlNfGas100ENfgasTiposBasicoV100TtpEmis;
    public cMunFG?: unknown;
    public finNFGas?: TPlNfGas100ENfgasTiposBasicoV100FinNf;
    public tpFat?: TPlNfGas100ENfgasTiposBasicoV100FatNf;
    public gCompraGov?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Ide) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Ide";


        if (props) {

        	this.cUF = props.cUF;
        	this.tpAmb = props.tpAmb;
        	this.mod = props.mod;
        	this.serie = props.serie;
        	this.nNF = props.nNF;
        	this.dhEmi = props.dhEmi;
        	this.tpEmis = props.tpEmis;
        	this.cMunFG = props.cMunFG;
        	this.finNFGas = props.finNFGas;
        	this.tpFat = props.tpFat;
        	this.gCompraGov = props.gCompraGov;
        }
    }
}
