import { TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento } from './TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento';

export interface IEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100 {
  "@class"?: string;
  retEnvEvento?: TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento;
}

export class CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
