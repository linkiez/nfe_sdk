import { TEventoCCePlV101RetEnvCCeV100RetEnvEvento } from './TEventoCCePlV101RetEnvCCeV100RetEnvEvento';

export interface IEventoCCePlV101RetEnvCCeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoCCePlV101RetEnvCCeV100RetEnvEvento;
}

export class CEventoCCePlV101RetEnvCCeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoCCePlV101RetEnvCCeV100RetEnvEvento;

    public constructor(props?: CEventoCCePlV101RetEnvCCeV100) {
        this["@class"] = ".CEventoCCePlV101RetEnvCCeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
