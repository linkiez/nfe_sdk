import { TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento } from './TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento';

export interface IEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100 {
  "@class"?: string;
  envEvento?: TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento;
}

export class CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100 {
    public "@class"?: string;

    public envEvento?: TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
