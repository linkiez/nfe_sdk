export interface IEventosRtcE112150V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  dPrevEntrega?: unknown;
}

export class CEventosRtcE112150V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public dPrevEntrega?: unknown;

    public constructor(props?: CEventosRtcE112150V100DetEvento) {
        this["@class"] = ".CEventosRtcE112150V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dPrevEntrega = props.dPrevEntrega;
        }
    }
}
