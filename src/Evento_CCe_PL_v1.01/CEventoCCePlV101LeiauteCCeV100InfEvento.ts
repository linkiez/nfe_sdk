import { CEventoCCePlV101LeiauteCCeV100DetEvento } from './CEventoCCePlV101LeiauteCCeV100DetEvento';

import { TEventoCCePlV101LeiauteCCeV100COrgaoIbge } from './TEventoCCePlV101LeiauteCCeV100COrgaoIbge';

export interface IEventoCCePlV101LeiauteCCeV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoCCePlV101LeiauteCCeV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoCCePlV101LeiauteCCeV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoCCePlV101LeiauteCCeV100DetEvento;
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

    public constructor(props?: CEventoCCePlV101LeiauteCCeV100InfEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoCCePlV101LeiauteCCeV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
