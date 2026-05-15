import { TEventoEpecPlV101E110140V100Ie } from './TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100Uf } from './TEventoEpecPlV101E110140V100Uf';

import { TEventoEpecPlV101E110140V100Vicms } from './TEventoEpecPlV101E110140V100Vicms';

import { TEventoEpecPlV101E110140V100Vnf } from './TEventoEpecPlV101E110140V100Vnf';

import { TEventoEpecPlV101E110140V100Vst } from './TEventoEpecPlV101E110140V100Vst';

export interface IEventoEpecPlV101E110140V100Dest {
  "@class"?: string;
  TEventoEpecPlV101E110140V100Uf?: TEventoEpecPlV101E110140V100Uf;
  TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
  vNF?: TEventoEpecPlV101E110140V100Vnf;
  vICMS?: TEventoEpecPlV101E110140V100Vicms;
  vST?: TEventoEpecPlV101E110140V100Vst;
}

export class CEventoEpecPlV101E110140V100Dest {
    public "@class"?: string;

    public TEventoEpecPlV101E110140V100Uf?: TEventoEpecPlV101E110140V100Uf;
    public TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
    public vNF?: TEventoEpecPlV101E110140V100Vnf;
    public vICMS?: TEventoEpecPlV101E110140V100Vicms;
    public vST?: TEventoEpecPlV101E110140V100Vst;

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

    public constructor(props?: CEventoEpecPlV101E110140V100Dest) {
        this["@class"] = ".CEventoEpecPlV101E110140V100Dest";


        if (props) {

        	this.TEventoEpecPlV101E110140V100Uf = props.TEventoEpecPlV101E110140V100Uf;
        	this.TEventoEpecPlV101E110140V100Ie = props.TEventoEpecPlV101E110140V100Ie;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        	this.vST = props.vST;
        }
    }
}
