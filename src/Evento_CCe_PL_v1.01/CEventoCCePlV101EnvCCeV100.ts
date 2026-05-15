import { TEventoCCePlV101EnvCCeV100EnvEvento } from './TEventoCCePlV101EnvCCeV100EnvEvento';

export interface IEventoCCePlV101EnvCCeV100 {
  "@class"?: string;
  envEvento?: TEventoCCePlV101EnvCCeV100EnvEvento;
}

export class CEventoCCePlV101EnvCCeV100 {
    public "@class"?: string;

    public envEvento?: TEventoCCePlV101EnvCCeV100EnvEvento;

    public constructor(props?: CEventoCCePlV101EnvCCeV100) {
        this["@class"] = ".CEventoCCePlV101EnvCCeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
