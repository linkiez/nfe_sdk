import { CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento } from './CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge } from './TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge';

export interface IEventoCancPlV101LeiauteEventoCancNFeV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento;
    public verAplic?: unknown;
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

    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
