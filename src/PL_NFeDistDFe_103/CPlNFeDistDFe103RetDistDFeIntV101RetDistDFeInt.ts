import { CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt } from './CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt';

export interface IPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  dhResp?: unknown;
  ultNSU?: unknown;
  maxNSU?: unknown;
  loteDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt;
}

export class CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public dhResp?: unknown;
    public ultNSU?: unknown;
    public maxNSU?: unknown;
    public loteDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt;

    public constructor(props?: CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt) {
        this["@class"] = ".CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.dhResp = props.dhResp;
        	this.ultNSU = props.ultNSU;
        	this.maxNSU = props.maxNSU;
        	this.loteDistDFeInt = (props.loteDistDFeInt) ? new CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt(props.loteDistDFeInt): undefined;
        }
    }
}
