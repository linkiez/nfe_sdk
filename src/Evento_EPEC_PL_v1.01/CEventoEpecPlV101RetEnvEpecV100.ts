import { TEventoEpecPlV101RetEnvEpecV100RetEnvEvento } from './TEventoEpecPlV101RetEnvEpecV100RetEnvEvento';

export interface IEventoEpecPlV101RetEnvEpecV100 {
  "@class"?: string;
  retEnvEvento?: TEventoEpecPlV101RetEnvEpecV100RetEnvEvento;
}

export class CEventoEpecPlV101RetEnvEpecV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoEpecPlV101RetEnvEpecV100RetEnvEvento;

    public constructor(props?: CEventoEpecPlV101RetEnvEpecV100) {
        this["@class"] = ".CEventoEpecPlV101RetEnvEpecV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
