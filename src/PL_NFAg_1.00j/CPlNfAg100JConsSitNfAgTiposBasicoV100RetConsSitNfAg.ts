import { CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg } from './CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg';

import { CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg } from './CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg';

import { TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg } from './TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg';

export interface IPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  protNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg;
  procEventoNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg;
  $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;
}

export class CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public protNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg;
    public procEventoNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg;
    public $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;

    public constructor(props?: CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg) {
        this["@class"] = ".CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.protNFAg = (props.protNFAg) ? new CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg(props.protNFAg): undefined;
        	this.procEventoNFAg = (props.procEventoNFAg) ? new CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg(props.procEventoNFAg): undefined;
        	this.$versao = props.$versao;
        }
    }
}
