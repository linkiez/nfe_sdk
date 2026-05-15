import { TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento } from './TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento';

export interface IEventoAtorInteressadoPlV102EventoAtorInteressadoV100 {
  "@class"?: string;
  evento?: TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento;
}

export class CEventoAtorInteressadoPlV102EventoAtorInteressadoV100 {
    public "@class"?: string;

    public evento?: TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento;

    public constructor(props?: CEventoAtorInteressadoPlV102EventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102EventoAtorInteressadoV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
