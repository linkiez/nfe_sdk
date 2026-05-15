import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from './TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100DhEmi } from './TEventoEpecPlV101LeiauteEpecV100DhEmi';

import { TEventoEpecPlV101LeiauteEpecV100Ie } from './TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100Uf } from './TEventoEpecPlV101LeiauteEpecV100Uf';

import { TEventoEpecPlV101LeiauteEpecV100VerAplic } from './TEventoEpecPlV101LeiauteEpecV100VerAplic';

import { TEventoEpecPlV101LeiauteEpecV100Vicms } from './TEventoEpecPlV101LeiauteEpecV100Vicms';

import { TEventoEpecPlV101LeiauteEpecV100Vnf } from './TEventoEpecPlV101LeiauteEpecV100Vnf';

import { TEventoEpecPlV101LeiauteEpecV100Vst } from './TEventoEpecPlV101LeiauteEpecV100Vst';

export interface IEventoEpecPlV101LeiauteEpecV100 {
  "@class"?: string;
  verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
  dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
  cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
  iE?: TEventoEpecPlV101LeiauteEpecV100Ie;
  uF?: TEventoEpecPlV101LeiauteEpecV100Uf;
  vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
  vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
  vST?: TEventoEpecPlV101LeiauteEpecV100Vst;
  descEvento?: unknown;
  tpAutor?: unknown;
  tpNF?: unknown;
}

export class CEventoEpecPlV101LeiauteEpecV100 {
    public "@class"?: string;

    public verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
    public dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
    public cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
    public iE?: TEventoEpecPlV101LeiauteEpecV100Ie;
    public uF?: TEventoEpecPlV101LeiauteEpecV100Uf;
    public vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
    public vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
    public vST?: TEventoEpecPlV101LeiauteEpecV100Vst;
    public descEvento?: unknown;
    public tpAutor?: unknown;
    public tpNF?: unknown;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.iE = props.iE;
        	this.uF = props.uF;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        	this.vST = props.vST;
        	this.descEvento = props.descEvento;
        	this.tpAutor = props.tpAutor;
        	this.tpNF = props.tpNF;
        }
    }
}
