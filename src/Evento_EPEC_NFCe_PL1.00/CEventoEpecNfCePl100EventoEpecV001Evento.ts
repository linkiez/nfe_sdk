import { CEventoEpecNfCePl100EventoEpecV001InfEvento } from './CEventoEpecNfCePl100EventoEpecV001InfEvento';

export interface IEventoEpecNfCePl100EventoEpecV001Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEpecNfCePl100EventoEpecV001InfEvento;
}

export class CEventoEpecNfCePl100EventoEpecV001Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEpecNfCePl100EventoEpecV001InfEvento;

    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001Evento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEpecNfCePl100EventoEpecV001InfEvento(props.infEvento): undefined;
        }
    }
}
