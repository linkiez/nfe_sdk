import { CEventoEpecNfCePl100EventoEpecV001DetEvento } from './CEventoEpecNfCePl100EventoEpecV001DetEvento';

import { TEventoEpecNfCePl100EventoEpecV001COrgaoIbge } from './TEventoEpecNfCePl100EventoEpecV001COrgaoIbge';

import { TEventoEpecNfCePl100EventoEpecV001VerEvento } from './TEventoEpecNfCePl100EventoEpecV001VerEvento';

export interface IEventoEpecNfCePl100EventoEpecV001InfEvento {
  "@class"?: string;
  cOrgao?: TEventoEpecNfCePl100EventoEpecV001COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  verEvento?: TEventoEpecNfCePl100EventoEpecV001VerEvento;
  detEvento?: CEventoEpecNfCePl100EventoEpecV001DetEvento;
}

export class CEventoEpecNfCePl100EventoEpecV001InfEvento {
    public "@class"?: string;

    public cOrgao?: TEventoEpecNfCePl100EventoEpecV001COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public verEvento?: TEventoEpecNfCePl100EventoEpecV001VerEvento;
    public detEvento?: CEventoEpecNfCePl100EventoEpecV001DetEvento;

    //choice

    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001InfEvento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.verEvento = props.verEvento;
        	this.detEvento = (props.detEvento) ? new CEventoEpecNfCePl100EventoEpecV001DetEvento(props.detEvento): undefined;
        }
    }
}
