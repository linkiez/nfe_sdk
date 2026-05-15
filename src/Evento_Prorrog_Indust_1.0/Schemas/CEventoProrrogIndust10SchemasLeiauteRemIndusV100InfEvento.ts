import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge } from './TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge';

export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cOrgaoAutor?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
  nProt?: unknown;
}

export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cOrgaoAutor?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
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

    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.nProt = props.nProt;
        }
    }
}
