import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public nProt?: unknown;

    //choice

    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest = arg;
    }

    //choice

    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest = arg;
    }

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
