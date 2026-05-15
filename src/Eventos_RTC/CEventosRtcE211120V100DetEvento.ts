import { CEventosRtcE211120V100GConsumo } from './CEventosRtcE211120V100GConsumo';

export interface IEventosRtcE211120V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gConsumo?: CEventosRtcE211120V100GConsumo;
}

export class CEventosRtcE211120V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gConsumo?: CEventosRtcE211120V100GConsumo;

    public constructor(props?: CEventosRtcE211120V100DetEvento) {
        this["@class"] = ".CEventosRtcE211120V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gConsumo = (props.gConsumo) ? new CEventosRtcE211120V100GConsumo(props.gConsumo): undefined;
        }
    }
}
