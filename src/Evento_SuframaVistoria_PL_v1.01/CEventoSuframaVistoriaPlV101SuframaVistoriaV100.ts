import { TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento } from './TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento';

export interface IEventoSuframaVistoriaPlV101SuframaVistoriaV100 {
  "@class"?: string;
  evento?: TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento;
}

export class CEventoSuframaVistoriaPlV101SuframaVistoriaV100 {
    public "@class"?: string;

    public evento?: TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento;

    public constructor(props?: CEventoSuframaVistoriaPlV101SuframaVistoriaV100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101SuframaVistoriaV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
