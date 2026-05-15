import { TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge } from './TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge';

export interface IEventoEpecNfCePl100RetEventoEpecV001InfEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  chNFe?: unknown;
  cOrgaoAutor?: unknown;
  dhRegEvento?: unknown;
  nProt?: unknown;
  chNFePend?: unknown;
}

export class CEventoEpecNfCePl100RetEventoEpecV001InfEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public chNFe?: unknown;
    public cOrgaoAutor?: unknown;
    public dhRegEvento?: unknown;
    public nProt?: unknown;
    public chNFePend?: unknown;

    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001InfEvento) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001InfEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.chNFe = props.chNFe;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.dhRegEvento = props.dhRegEvento;
        	this.nProt = props.nProt;
        	this.chNFePend = props.chNFePend;
        }
    }
}
