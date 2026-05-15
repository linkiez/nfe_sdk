import { CEventoAverbPlV101LeiauteAverbV100DetEvento } from './CEventoAverbPlV101LeiauteAverbV100DetEvento';

export interface IEventoAverbPlV101LeiauteAverbV100InfEvento {
  "@class"?: string;
  tpAmb?: unknown;
  CNPJ?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoAverbPlV101LeiauteAverbV100DetEvento;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoAverbPlV101LeiauteAverbV100InfEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public CNPJ?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoAverbPlV101LeiauteAverbV100DetEvento;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public nProt?: unknown;

    //choice

    public CNPJDest(arg: unknown) {
        delete((this as any).CPFDest);
        (this as any).CNPJDest = arg;
    }

    //choice

    public CPFDest(arg: unknown) {
        delete((this as any).CNPJDest);
        (this as any).CPFDest = arg;
    }

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100InfEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100InfEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.CNPJ = props.CNPJ;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoAverbPlV101LeiauteAverbV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
