import { TEventoGenericoPlV101EnvEventoV100EnvEvento } from './TEventoGenericoPlV101EnvEventoV100EnvEvento';

export interface IEventoGenericoPlV101EnvEventoV100 {
  "@class"?: string;
  envEvento?: TEventoGenericoPlV101EnvEventoV100EnvEvento;
}

export class CEventoGenericoPlV101EnvEventoV100 {
    public "@class"?: string;

    public envEvento?: TEventoGenericoPlV101EnvEventoV100EnvEvento;

    public constructor(props?: CEventoGenericoPlV101EnvEventoV100) {
        this["@class"] = ".CEventoGenericoPlV101EnvEventoV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
