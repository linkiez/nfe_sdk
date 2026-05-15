import { CEventoEpecPlV101LeiauteEpecV100DetEvento } from './CEventoEpecPlV101LeiauteEpecV100DetEvento';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from './TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoIbge } from './TEventoEpecPlV101LeiauteEpecV100COrgaoIbge';

export interface IEventoEpecPlV101LeiauteEpecV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoEpecPlV101LeiauteEpecV100DetEvento;
  cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
  chNFePend?: unknown;
}

export class CEventoEpecPlV101LeiauteEpecV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoEpecPlV101LeiauteEpecV100DetEvento;
    public cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public nProt?: unknown;
    public chNFePend?: unknown;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100InfEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoEpecPlV101LeiauteEpecV100DetEvento(props.detEvento): undefined;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        	this.chNFePend = props.chNFePend;
        }
    }
}
