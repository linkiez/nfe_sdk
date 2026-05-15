import { TEventoAverbPlV101RetEnvAverbV100RetEnvEvento } from './TEventoAverbPlV101RetEnvAverbV100RetEnvEvento';

export interface IEventoAverbPlV101RetEnvAverbV100 {
  "@class"?: string;
  retEnvEvento?: TEventoAverbPlV101RetEnvAverbV100RetEnvEvento;
}

export class CEventoAverbPlV101RetEnvAverbV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoAverbPlV101RetEnvAverbV100RetEnvEvento;

    public constructor(props?: CEventoAverbPlV101RetEnvAverbV100) {
        this["@class"] = ".CEventoAverbPlV101RetEnvAverbV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
