import { CEventosRtcE211140V100GConsumoComb } from './CEventosRtcE211140V100GConsumoComb';

export interface IEventosRtcE211140V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gConsumoComb?: CEventosRtcE211140V100GConsumoComb;
}

export class CEventosRtcE211140V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gConsumoComb?: CEventosRtcE211140V100GConsumoComb;

    public constructor(props?: CEventosRtcE211140V100DetEvento) {
        this["@class"] = ".CEventosRtcE211140V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gConsumoComb = (props.gConsumoComb) ? new CEventosRtcE211140V100GConsumoComb(props.gConsumoComb): undefined;
        }
    }
}
