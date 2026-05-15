import { TEventoEconfV100EnvEventoCancEConfV100EnvEvento } from './TEventoEconfV100EnvEventoCancEConfV100EnvEvento';

export interface IEventoEconfV100EnvEventoCancEConfV100 {
  "@class"?: string;
  envEvento?: TEventoEconfV100EnvEventoCancEConfV100EnvEvento;
}

export class CEventoEconfV100EnvEventoCancEConfV100 {
    public "@class"?: string;

    public envEvento?: TEventoEconfV100EnvEventoCancEConfV100EnvEvento;

    public constructor(props?: CEventoEconfV100EnvEventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100EnvEventoCancEConfV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
