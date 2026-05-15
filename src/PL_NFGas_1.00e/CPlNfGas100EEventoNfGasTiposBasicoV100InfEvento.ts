import { CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento';

export interface IPlNfGas100EEventoNfGasTiposBasicoV100InfEvento {
  "@class"?: string;
  cOrgao?: unknown;
  tpAmb?: unknown;
  CNPJ?: unknown;
  chNFGas?: unknown;
  dhEvento?: unknown;
  detEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  dhRegEvento?: unknown;
  nProt?: unknown;
}

export class CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento {
    public "@class"?: string;

    public cOrgao?: unknown;
    public tpAmb?: unknown;
    public CNPJ?: unknown;
    public chNFGas?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public dhRegEvento?: unknown;
    public nProt?: unknown;

    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.CNPJ = props.CNPJ;
        	this.chNFGas = props.chNFGas;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.dhRegEvento = props.dhRegEvento;
        	this.nProt = props.nProt;
        }
    }
}
