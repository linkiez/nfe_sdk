export interface IEventoInsucessoNFePlV102E110192V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  dhTentativaEntrega?: unknown;
  latGPS?: unknown;
  longGPS?: unknown;
  dhHashTentativaEntrega?: unknown;
}

export class CEventoInsucessoNFePlV102E110192V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public dhTentativaEntrega?: unknown;
    public latGPS?: unknown;
    public longGPS?: unknown;
    public dhHashTentativaEntrega?: unknown;

    public constructor(props?: CEventoInsucessoNFePlV102E110192V100DetEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102E110192V100DetEvento";


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
