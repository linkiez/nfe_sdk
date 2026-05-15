import { CEventoEpecNfCePl100EventoEpecV001Evento } from './CEventoEpecNfCePl100EventoEpecV001Evento';

export interface IEventoEpecNfCePl100EventoEpecV001EnvEvento {
  "@class"?: string;
  evento?: CEventoEpecNfCePl100EventoEpecV001Evento;
}

export class CEventoEpecNfCePl100EventoEpecV001EnvEvento {
    public "@class"?: string;

    public evento?: CEventoEpecNfCePl100EventoEpecV001Evento;

    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001EnvEvento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEpecNfCePl100EventoEpecV001Evento(props.evento): undefined;
        }
    }
}
