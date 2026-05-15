import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  verEvento?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
  detEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public verEvento?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
    public detEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento;
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

    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.verEvento = props.verEvento;
        	this.detEvento = (props.detEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
