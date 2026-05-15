import { CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento';

import { CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa } from './CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa';

export interface IPlNfAg100JEventoNfAgTiposBasicoV100InfEvento {
  "@class"?: string;
  cOrgao?: unknown;
  tpAmb?: unknown;
  CNPJ?: unknown;
  chNFAg?: unknown;
  dhEvento?: unknown;
  detEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento;
  infPAA?: CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  dhRegEvento?: unknown;
  nProt?: unknown;
}

export class CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento {
    public "@class"?: string;

    public cOrgao?: unknown;
    public tpAmb?: unknown;
    public CNPJ?: unknown;
    public chNFAg?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento;
    public infPAA?: CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public dhRegEvento?: unknown;
    public nProt?: unknown;

    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.CNPJ = props.CNPJ;
        	this.chNFAg = props.chNFAg;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento(props.detEvento): undefined;
        	this.infPAA = (props.infPAA) ? new CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa(props.infPAA): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.dhRegEvento = props.dhRegEvento;
        	this.nProt = props.nProt;
        }
    }
}
