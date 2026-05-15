import { CPlNfAg100JNfagTiposBasicoV100ProtNfAg } from './CPlNfAg100JNfagTiposBasicoV100ProtNfAg';

import { TPlNfAg100JNfagTiposBasicoV100VerNfAg } from './TPlNfAg100JNfagTiposBasicoV100VerNfAg';

export interface IPlNfAg100JNfagTiposBasicoV100RetNfAg {
  "@class"?: string;
  tpAmb?: unknown;
  cUF?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  protNFAg?: CPlNfAg100JNfagTiposBasicoV100ProtNfAg;
  $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;
}

export class CPlNfAg100JNfagTiposBasicoV100RetNfAg {
    public "@class"?: string;

    public tpAmb?: unknown;
    public cUF?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public protNFAg?: CPlNfAg100JNfagTiposBasicoV100ProtNfAg;
    public $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100RetNfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100RetNfAg";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.cUF = props.cUF;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.protNFAg = (props.protNFAg) ? new CPlNfAg100JNfagTiposBasicoV100ProtNfAg(props.protNFAg): undefined;
        	this.$versao = props.$versao;
        }
    }
}
