import { TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento } from './TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento';

export interface IEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100 {
  "@class"?: string;
  envEvento?: TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento;
}

export class CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100 {
    public "@class"?: string;

    public envEvento?: TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
