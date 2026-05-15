import { CEventosRtcE112120V100GConsumo } from './CEventosRtcE112120V100GConsumo';

export interface IEventosRtcE112120V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gConsumo?: CEventosRtcE112120V100GConsumo;
}

export class CEventosRtcE112120V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gConsumo?: CEventosRtcE112120V100GConsumo;

    public constructor(props?: CEventosRtcE112120V100DetEvento) {
        this["@class"] = ".CEventosRtcE112120V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gConsumo = (props.gConsumo) ? new CEventosRtcE112120V100GConsumo(props.gConsumo): undefined;
        }
    }
}
