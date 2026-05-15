import { CEventoGenericoPlV101LeiauteEventoV100DetEvento } from './CEventoGenericoPlV101LeiauteEventoV100DetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge } from './TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge';

export interface IEventoGenericoPlV101LeiauteEventoV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoGenericoPlV101LeiauteEventoV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cOrgaoAutor?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
  nProt?: unknown;
}

export class CEventoGenericoPlV101LeiauteEventoV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoGenericoPlV101LeiauteEventoV100DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cOrgaoAutor?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
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

    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100InfEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoGenericoPlV101LeiauteEventoV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.nProt = props.nProt;
        }
    }
}
