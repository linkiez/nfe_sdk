import { CEventosRtcE211110V100GCredPres } from './CEventosRtcE211110V100GCredPres';

export interface IEventosRtcE211110V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gCredPres?: CEventosRtcE211110V100GCredPres;
}

export class CEventosRtcE211110V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gCredPres?: CEventosRtcE211110V100GCredPres;

    public constructor(props?: CEventosRtcE211110V100DetEvento) {
        this["@class"] = ".CEventosRtcE211110V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gCredPres = (props.gCredPres) ? new CEventosRtcE211110V100GCredPres(props.gCredPres): undefined;
        }
    }
}
