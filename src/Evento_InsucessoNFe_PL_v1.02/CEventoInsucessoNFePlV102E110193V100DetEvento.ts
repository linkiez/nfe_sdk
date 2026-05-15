export interface IEventoInsucessoNFePlV102E110193V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  nProtEvento?: unknown;
}

export class CEventoInsucessoNFePlV102E110193V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public nProtEvento?: unknown;

    public constructor(props?: CEventoInsucessoNFePlV102E110193V100DetEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102E110193V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
