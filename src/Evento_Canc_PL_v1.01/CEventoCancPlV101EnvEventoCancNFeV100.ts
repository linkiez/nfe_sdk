import { TEventoCancPlV101EnvEventoCancNFeV100EnvEvento } from './TEventoCancPlV101EnvEventoCancNFeV100EnvEvento';

export interface IEventoCancPlV101EnvEventoCancNFeV100 {
  "@class"?: string;
  envEvento?: TEventoCancPlV101EnvEventoCancNFeV100EnvEvento;
}

export class CEventoCancPlV101EnvEventoCancNFeV100 {
    public "@class"?: string;

    public envEvento?: TEventoCancPlV101EnvEventoCancNFeV100EnvEvento;

    public constructor(props?: CEventoCancPlV101EnvEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101EnvEventoCancNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
