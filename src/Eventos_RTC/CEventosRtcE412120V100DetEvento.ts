export interface IEventosRtcE412120V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
}

export class CEventosRtcE412120V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;

    public constructor(props?: CEventosRtcE412120V100DetEvento) {
        this["@class"] = ".CEventosRtcE412120V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
