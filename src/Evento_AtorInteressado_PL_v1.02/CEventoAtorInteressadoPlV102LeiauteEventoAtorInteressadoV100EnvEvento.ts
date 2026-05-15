import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento } from './TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento';

export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento {
  "@class"?: string;
  evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;
}

export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
