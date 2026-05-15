import { CEventoEpecPlV101E110140V100Dest } from './CEventoEpecPlV101E110140V100Dest';

import { TEventoEpecPlV101E110140V100COrgaoAutor } from './TEventoEpecPlV101E110140V100COrgaoAutor';

import { TEventoEpecPlV101E110140V100DhEmi } from './TEventoEpecPlV101E110140V100DhEmi';

import { TEventoEpecPlV101E110140V100Ie } from './TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100VerAplic } from './TEventoEpecPlV101E110140V100VerAplic';

export interface IEventoEpecPlV101E110140V100DetEvento {
  "@class"?: string;
  descEvento?: unknown;
  cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
  tpAutor?: unknown;
  verAplic?: TEventoEpecPlV101E110140V100VerAplic;
  dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
  tpNF?: unknown;
  TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
  dest?: CEventoEpecPlV101E110140V100Dest;
}

export class CEventoEpecPlV101E110140V100DetEvento {
    public "@class"?: string;

    public descEvento?: unknown;
    public cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
    public tpAutor?: unknown;
    public verAplic?: TEventoEpecPlV101E110140V100VerAplic;
    public dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
    public tpNF?: unknown;
    public TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
    public dest?: CEventoEpecPlV101E110140V100Dest;

    public constructor(props?: CEventoEpecPlV101E110140V100DetEvento) {
        this["@class"] = ".CEventoEpecPlV101E110140V100DetEvento";


        if (props) {

        	this.descEvento = props.descEvento;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.tpAutor = props.tpAutor;
        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.tpNF = props.tpNF;
        	this.TEventoEpecPlV101E110140V100Ie = props.TEventoEpecPlV101E110140V100Ie;
        	this.dest = (props.dest) ? new CEventoEpecPlV101E110140V100Dest(props.dest): undefined;
        }
    }
}
