import { CEventoEpecPlV101E110140V100DetEvento } from './CEventoEpecPlV101E110140V100DetEvento';

import { TEventoEpecPlV101E110140V100COrgaoAutor } from './TEventoEpecPlV101E110140V100COrgaoAutor';

import { TEventoEpecPlV101E110140V100DhEmi } from './TEventoEpecPlV101E110140V100DhEmi';

import { TEventoEpecPlV101E110140V100Ie } from './TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100Uf } from './TEventoEpecPlV101E110140V100Uf';

import { TEventoEpecPlV101E110140V100VerAplic } from './TEventoEpecPlV101E110140V100VerAplic';

import { TEventoEpecPlV101E110140V100Vicms } from './TEventoEpecPlV101E110140V100Vicms';

import { TEventoEpecPlV101E110140V100Vnf } from './TEventoEpecPlV101E110140V100Vnf';

import { TEventoEpecPlV101E110140V100Vst } from './TEventoEpecPlV101E110140V100Vst';

export interface IEventoEpecPlV101E110140V100 {
  "@class"?: string;
  verAplic?: TEventoEpecPlV101E110140V100VerAplic;
  dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
  cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
  iE?: TEventoEpecPlV101E110140V100Ie;
  uF?: TEventoEpecPlV101E110140V100Uf;
  vNF?: TEventoEpecPlV101E110140V100Vnf;
  vICMS?: TEventoEpecPlV101E110140V100Vicms;
  vST?: TEventoEpecPlV101E110140V100Vst;
  detEvento?: CEventoEpecPlV101E110140V100DetEvento;
  descEvento?: unknown;
  tpAutor?: unknown;
  tpNF?: unknown;
}

export class CEventoEpecPlV101E110140V100 {
    public "@class"?: string;

    public verAplic?: TEventoEpecPlV101E110140V100VerAplic;
    public dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
    public cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
    public iE?: TEventoEpecPlV101E110140V100Ie;
    public uF?: TEventoEpecPlV101E110140V100Uf;
    public vNF?: TEventoEpecPlV101E110140V100Vnf;
    public vICMS?: TEventoEpecPlV101E110140V100Vicms;
    public vST?: TEventoEpecPlV101E110140V100Vst;
    public detEvento?: CEventoEpecPlV101E110140V100DetEvento;
    public descEvento?: unknown;
    public tpAutor?: unknown;
    public tpNF?: unknown;

    public constructor(props?: CEventoEpecPlV101E110140V100) {
        this["@class"] = ".CEventoEpecPlV101E110140V100";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.iE = props.iE;
        	this.uF = props.uF;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        	this.vST = props.vST;
        	this.detEvento = (props.detEvento) ? new CEventoEpecPlV101E110140V100DetEvento(props.detEvento): undefined;
        	this.descEvento = props.descEvento;
        	this.tpAutor = props.tpAutor;
        	this.tpNF = props.tpNF;
        }
    }
}
