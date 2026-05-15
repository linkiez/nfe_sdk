import { TEventoEconfV100RetEventoEConfV100RetEnvEvento } from './TEventoEconfV100RetEventoEConfV100RetEnvEvento';

export interface IEventoEconfV100RetEventoEConfV100 {
  "@class"?: string;
  retEnvEvento?: TEventoEconfV100RetEventoEConfV100RetEnvEvento;
}

export class CEventoEconfV100RetEventoEConfV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoEconfV100RetEventoEConfV100RetEnvEvento;

    public constructor(props?: CEventoEconfV100RetEventoEConfV100) {
        this["@class"] = ".CEventoEconfV100RetEventoEConfV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
