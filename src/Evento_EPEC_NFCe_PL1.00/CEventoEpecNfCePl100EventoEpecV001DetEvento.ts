import { CEventoEpecNfCePl100EventoEpecV001Dest } from './CEventoEpecNfCePl100EventoEpecV001Dest';

export interface IEventoEpecNfCePl100EventoEpecV001DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  dhEmi?: unknown;
  IE?: unknown;
  dest?: CEventoEpecNfCePl100EventoEpecV001Dest;
  vNF?: unknown;
  vICMS?: unknown;
}

export class CEventoEpecNfCePl100EventoEpecV001DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public dhEmi?: unknown;
    public IE?: unknown;
    public dest?: CEventoEpecNfCePl100EventoEpecV001Dest;
    public vNF?: unknown;
    public vICMS?: unknown;

    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001DetEvento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.IE = props.IE;
        	this.dest = (props.dest) ? new CEventoEpecNfCePl100EventoEpecV001Dest(props.dest): undefined;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        }
    }
}
