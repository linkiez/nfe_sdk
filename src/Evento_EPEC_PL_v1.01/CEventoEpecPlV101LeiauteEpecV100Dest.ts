import { TEventoEpecPlV101LeiauteEpecV100Ie } from './TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100Uf } from './TEventoEpecPlV101LeiauteEpecV100Uf';

import { TEventoEpecPlV101LeiauteEpecV100Vicms } from './TEventoEpecPlV101LeiauteEpecV100Vicms';

import { TEventoEpecPlV101LeiauteEpecV100Vnf } from './TEventoEpecPlV101LeiauteEpecV100Vnf';

import { TEventoEpecPlV101LeiauteEpecV100Vst } from './TEventoEpecPlV101LeiauteEpecV100Vst';

export interface IEventoEpecPlV101LeiauteEpecV100Dest {
  "@class"?: string;
  TEventoEpecPlV101LeiauteEpecV100Uf?: TEventoEpecPlV101LeiauteEpecV100Uf;
  TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
  vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
  vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
  vST?: TEventoEpecPlV101LeiauteEpecV100Vst;
}

export class CEventoEpecPlV101LeiauteEpecV100Dest {
    public "@class"?: string;

    public TEventoEpecPlV101LeiauteEpecV100Uf?: TEventoEpecPlV101LeiauteEpecV100Uf;
    public TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
    public vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
    public vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
    public vST?: TEventoEpecPlV101LeiauteEpecV100Vst;

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

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100Dest) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100Dest";


        if (props) {

        	this.TEventoEpecPlV101LeiauteEpecV100Uf = props.TEventoEpecPlV101LeiauteEpecV100Uf;
        	this.TEventoEpecPlV101LeiauteEpecV100Ie = props.TEventoEpecPlV101LeiauteEpecV100Ie;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        	this.vST = props.vST;
        }
    }
}
