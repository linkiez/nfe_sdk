import { TEventoEconfV100RetEventoCancEConfV100RetEnvEvento } from './TEventoEconfV100RetEventoCancEConfV100RetEnvEvento';

export interface IEventoEconfV100RetEventoCancEConfV100 {
  "@class"?: string;
  retEnvEvento?: TEventoEconfV100RetEventoCancEConfV100RetEnvEvento;
}

export class CEventoEconfV100RetEventoCancEConfV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoEconfV100RetEventoCancEConfV100RetEnvEvento;

    public constructor(props?: CEventoEconfV100RetEventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100RetEventoCancEConfV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
