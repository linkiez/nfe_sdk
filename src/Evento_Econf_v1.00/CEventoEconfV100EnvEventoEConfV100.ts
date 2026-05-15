import { TEventoEconfV100EnvEventoEConfV100EnvEvento } from './TEventoEconfV100EnvEventoEConfV100EnvEvento';

export interface IEventoEconfV100EnvEventoEConfV100 {
  "@class"?: string;
  envEvento?: TEventoEconfV100EnvEventoEConfV100EnvEvento;
}

export class CEventoEconfV100EnvEventoEConfV100 {
    public "@class"?: string;

    public envEvento?: TEventoEconfV100EnvEventoEConfV100EnvEvento;

    public constructor(props?: CEventoEconfV100EnvEventoEConfV100) {
        this["@class"] = ".CEventoEconfV100EnvEventoEConfV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
