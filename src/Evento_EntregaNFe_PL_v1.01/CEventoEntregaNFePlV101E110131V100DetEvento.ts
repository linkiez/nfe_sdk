export interface IEventoEntregaNFePlV101E110131V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  nProtEvento?: unknown;
}

export class CEventoEntregaNFePlV101E110131V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public nProtEvento?: unknown;

    public constructor(props?: CEventoEntregaNFePlV101E110131V100DetEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101E110131V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
