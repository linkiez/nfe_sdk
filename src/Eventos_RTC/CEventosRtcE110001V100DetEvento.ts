export interface IEventosRtcE110001V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  nProtEvento?: unknown;
}

export class CEventosRtcE110001V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public nProtEvento?: unknown;

    public constructor(props?: CEventosRtcE110001V100DetEvento) {
        this["@class"] = ".CEventosRtcE110001V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
