import { TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento } from './TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento';

export interface IEventoCancPlV101RetEnvEventoCancNFeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento;
}

export class CEventoCancPlV101RetEnvEventoCancNFeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento;

    public constructor(props?: CEventoCancPlV101RetEnvEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101RetEnvEventoCancNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
