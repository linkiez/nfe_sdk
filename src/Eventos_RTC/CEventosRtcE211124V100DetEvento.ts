import { CEventosRtcE211124V100GPerecimento } from './CEventosRtcE211124V100GPerecimento';

export interface IEventosRtcE211124V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gPerecimento?: CEventosRtcE211124V100GPerecimento;
}

export class CEventosRtcE211124V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gPerecimento?: CEventosRtcE211124V100GPerecimento;

    public constructor(props?: CEventosRtcE211124V100DetEvento) {
        this["@class"] = ".CEventosRtcE211124V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gPerecimento = (props.gPerecimento) ? new CEventosRtcE211124V100GPerecimento(props.gPerecimento): undefined;
        }
    }
}
