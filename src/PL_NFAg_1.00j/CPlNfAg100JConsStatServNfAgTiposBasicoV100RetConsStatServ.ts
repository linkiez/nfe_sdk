import { TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat } from './TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat';

export interface IPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ {
  "@class"?: string;
  tpAmb?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  dhRecbto?: unknown;
  dhRetorno?: unknown;
  $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;
}

export class CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ {
    public "@class"?: string;

    public tpAmb?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public dhRecbto?: unknown;
    public dhRetorno?: unknown;
    public $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;

    public constructor(props?: CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ) {
        this["@class"] = ".CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.dhRecbto = props.dhRecbto;
        	this.dhRetorno = props.dhRetorno;
        	this.$versao = props.$versao;
        }
    }
}
