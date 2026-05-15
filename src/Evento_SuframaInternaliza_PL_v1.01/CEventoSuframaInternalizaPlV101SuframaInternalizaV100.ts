import { TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento } from './TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento';

export interface IEventoSuframaInternalizaPlV101SuframaInternalizaV100 {
  "@class"?: string;
  evento?: TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento;
}

export class CEventoSuframaInternalizaPlV101SuframaInternalizaV100 {
    public "@class"?: string;

    public evento?: TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento;

    public constructor(props?: CEventoSuframaInternalizaPlV101SuframaInternalizaV100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101SuframaInternalizaV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
