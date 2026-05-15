export interface IEventosRtcE212120V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
}

export class CEventosRtcE212120V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;

    public constructor(props?: CEventosRtcE212120V100DetEvento) {
        this["@class"] = ".CEventosRtcE212120V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
