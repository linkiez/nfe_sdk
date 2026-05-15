import { TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento } from './TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento';

export interface IEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100 {
  "@class"?: string;
  envEvento?: TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento;
}

export class CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100 {
    public "@class"?: string;

    public envEvento?: TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
