import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento {
  "@class"?: string;
  cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public nProt?: unknown;

    //choice

    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest = arg;
    }

    //choice

    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest = arg;
    }

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
