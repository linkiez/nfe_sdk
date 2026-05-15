import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento';

export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento {
  "@class"?: string;
  cOrgao?: unknown;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  detEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cOrgaoAutor?: unknown;
  nProt?: unknown;
}

export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento {
    public "@class"?: string;

    public cOrgao?: unknown;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public detEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cOrgaoAutor?: unknown;
    public nProt?: unknown;

    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.nProt = props.nProt;
        }
    }
}
