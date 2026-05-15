import { TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento } from './TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento';

export interface IEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100 {
  "@class"?: string;
  retEnvEvento?: TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento;
}

export class CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
