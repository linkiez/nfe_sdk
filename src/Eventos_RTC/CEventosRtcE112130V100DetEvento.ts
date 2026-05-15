import { CEventosRtcE112130V100GPerecimento } from './CEventosRtcE112130V100GPerecimento';

export interface IEventosRtcE112130V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gPerecimento?: CEventosRtcE112130V100GPerecimento;
}

export class CEventosRtcE112130V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gPerecimento?: CEventosRtcE112130V100GPerecimento;

    public constructor(props?: CEventosRtcE112130V100DetEvento) {
        this["@class"] = ".CEventosRtcE112130V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gPerecimento = (props.gPerecimento) ? new CEventosRtcE112130V100GPerecimento(props.gPerecimento): undefined;
        }
    }
}
