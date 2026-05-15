import { TEventoAverbPlV101EnvAverbV100EnvEvento } from './TEventoAverbPlV101EnvAverbV100EnvEvento';

export interface IEventoAverbPlV101EnvAverbV100 {
  "@class"?: string;
  envEvento?: TEventoAverbPlV101EnvAverbV100EnvEvento;
}

export class CEventoAverbPlV101EnvAverbV100 {
    public "@class"?: string;

    public envEvento?: TEventoAverbPlV101EnvAverbV100EnvEvento;

    public constructor(props?: CEventoAverbPlV101EnvAverbV100) {
        this["@class"] = ".CEventoAverbPlV101EnvAverbV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
