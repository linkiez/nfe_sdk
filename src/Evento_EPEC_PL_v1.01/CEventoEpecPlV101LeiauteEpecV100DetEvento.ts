import { CEventoEpecPlV101LeiauteEpecV100Dest } from './CEventoEpecPlV101LeiauteEpecV100Dest';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from './TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100DhEmi } from './TEventoEpecPlV101LeiauteEpecV100DhEmi';

import { TEventoEpecPlV101LeiauteEpecV100Ie } from './TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100VerAplic } from './TEventoEpecPlV101LeiauteEpecV100VerAplic';

export interface IEventoEpecPlV101LeiauteEpecV100DetEvento {
  "@class"?: string;
  descEvento?: unknown;
  cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
  tpAutor?: unknown;
  verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
  dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
  tpNF?: unknown;
  TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
  dest?: CEventoEpecPlV101LeiauteEpecV100Dest;
}

export class CEventoEpecPlV101LeiauteEpecV100DetEvento {
    public "@class"?: string;

    public descEvento?: unknown;
    public cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
    public tpAutor?: unknown;
    public verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
    public dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
    public tpNF?: unknown;
    public TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
    public dest?: CEventoEpecPlV101LeiauteEpecV100Dest;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100DetEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100DetEvento";


        if (props) {

        	this.descEvento = props.descEvento;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.tpAutor = props.tpAutor;
        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.tpNF = props.tpNF;
        	this.TEventoEpecPlV101LeiauteEpecV100Ie = props.TEventoEpecPlV101LeiauteEpecV100Ie;
        	this.dest = (props.dest) ? new CEventoEpecPlV101LeiauteEpecV100Dest(props.dest): undefined;
        }
    }
}
