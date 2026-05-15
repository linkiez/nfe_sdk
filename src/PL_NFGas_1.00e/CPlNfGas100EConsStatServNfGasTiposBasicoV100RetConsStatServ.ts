import { TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat } from './TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat';

export interface IPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ {
  "@class"?: string;
  tpAmb?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  dhRecbto?: unknown;
  dhRetorno?: unknown;
  $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;
}

export class CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ {
    public "@class"?: string;

    public tpAmb?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public dhRecbto?: unknown;
    public dhRetorno?: unknown;
    public $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;

    public constructor(props?: CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ) {
        this["@class"] = ".CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ";


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
