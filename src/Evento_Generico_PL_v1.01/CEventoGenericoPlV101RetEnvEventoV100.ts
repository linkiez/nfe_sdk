import { TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento } from './TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento';

export interface IEventoGenericoPlV101RetEnvEventoV100 {
  "@class"?: string;
  retEnvEvento?: TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento;
}

export class CEventoGenericoPlV101RetEnvEventoV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento;

    public constructor(props?: CEventoGenericoPlV101RetEnvEventoV100) {
        this["@class"] = ".CEventoGenericoPlV101RetEnvEventoV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
