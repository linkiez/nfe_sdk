export interface IEventosRtcE412130V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
}

export class CEventosRtcE412130V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;

    public constructor(props?: CEventosRtcE412130V100DetEvento) {
        this["@class"] = ".CEventosRtcE412130V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
