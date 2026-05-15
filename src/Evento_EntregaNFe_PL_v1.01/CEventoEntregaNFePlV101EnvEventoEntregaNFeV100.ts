import { TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento } from './TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento';

export interface IEventoEntregaNFePlV101EnvEventoEntregaNFeV100 {
  "@class"?: string;
  envEvento?: TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento;
}

export class CEventoEntregaNFePlV101EnvEventoEntregaNFeV100 {
    public "@class"?: string;

    public envEvento?: TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101EnvEventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EnvEventoEntregaNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
