import { CEventosRtcE211110V100Gcbs } from './CEventosRtcE211110V100Gcbs';

import { CEventosRtcE211110V100Gibs } from './CEventosRtcE211110V100Gibs';

export interface IEventosRtcE211110V100GCredPres {
  "@class"?: string;
  vBC?: unknown;
  gIBS?: CEventosRtcE211110V100Gibs;
  gCBS?: CEventosRtcE211110V100Gcbs;
}

export class CEventosRtcE211110V100GCredPres {
    public "@class"?: string;

    public vBC?: unknown;
    public gIBS?: CEventosRtcE211110V100Gibs;
    public gCBS?: CEventosRtcE211110V100Gcbs;

    public constructor(props?: CEventosRtcE211110V100GCredPres) {
        this["@class"] = ".CEventosRtcE211110V100GCredPres";


        if (props) {

        	this.vBC = props.vBC;
        	this.gIBS = (props.gIBS) ? new CEventosRtcE211110V100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CEventosRtcE211110V100Gcbs(props.gCBS): undefined;
        }
    }
}
