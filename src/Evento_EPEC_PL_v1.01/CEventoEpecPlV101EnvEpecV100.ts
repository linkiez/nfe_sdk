import { TEventoEpecPlV101EnvEpecV100EnvEvento } from './TEventoEpecPlV101EnvEpecV100EnvEvento';

export interface IEventoEpecPlV101EnvEpecV100 {
  "@class"?: string;
  envEvento?: TEventoEpecPlV101EnvEpecV100EnvEvento;
}

export class CEventoEpecPlV101EnvEpecV100 {
    public "@class"?: string;

    public envEvento?: TEventoEpecPlV101EnvEpecV100EnvEvento;

    public constructor(props?: CEventoEpecPlV101EnvEpecV100) {
        this["@class"] = ".CEventoEpecPlV101EnvEpecV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
