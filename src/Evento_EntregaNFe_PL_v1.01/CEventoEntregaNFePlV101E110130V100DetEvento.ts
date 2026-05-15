export interface IEventoEntregaNFePlV101E110130V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  dhEntrega?: unknown;
  latGPS?: unknown;
  longGPS?: unknown;
  dhHashComprovante?: unknown;
}

export class CEventoEntregaNFePlV101E110130V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public dhEntrega?: unknown;
    public latGPS?: unknown;
    public longGPS?: unknown;
    public dhHashComprovante?: unknown;

    public constructor(props?: CEventoEntregaNFePlV101E110130V100DetEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101E110130V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dhEntrega = props.dhEntrega;
        	this.latGPS = props.latGPS;
        	this.longGPS = props.longGPS;
        	this.dhHashComprovante = props.dhHashComprovante;
        }
    }
}
