import { TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento } from './TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento';

export interface IEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100 {
  "@class"?: string;
  retEnvEvento?: TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento;
}

export class CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
