export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento {
  "@class"?: string;
  detEvento?: unknown;
  cOrgao?: unknown;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cOrgaoAutor?: unknown;
  nProt?: unknown;
}

export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento {
    public "@class"?: string;

    public detEvento?: unknown;
    public cOrgao?: unknown;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cOrgaoAutor?: unknown;
    public nProt?: unknown;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento";


        if (props) {

        	this.detEvento = props.detEvento;
        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.nProt = props.nProt;
        }
    }
}
