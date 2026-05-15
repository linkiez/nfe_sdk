import { TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento } from './TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento';

export interface IEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100 {
  "@class"?: string;
  envEvento?: TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento;
}

export class CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100 {
    public "@class"?: string;

    public envEvento?: TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
