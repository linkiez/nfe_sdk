export interface IEventoInsucessoNFePlV102Tmp0000DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  dhTentativaEntrega?: unknown;
  latGPS?: unknown;
  longGPS?: unknown;
  dhHashTentativaEntrega?: unknown;
}

export class CEventoInsucessoNFePlV102Tmp0000DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public dhTentativaEntrega?: unknown;
    public latGPS?: unknown;
    public longGPS?: unknown;
    public dhHashTentativaEntrega?: unknown;

    public constructor(props?: CEventoInsucessoNFePlV102Tmp0000DetEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102Tmp0000DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dhTentativaEntrega = props.dhTentativaEntrega;
        	this.latGPS = props.latGPS;
        	this.longGPS = props.longGPS;
        	this.dhHashTentativaEntrega = props.dhHashTentativaEntrega;
        }
    }
}
