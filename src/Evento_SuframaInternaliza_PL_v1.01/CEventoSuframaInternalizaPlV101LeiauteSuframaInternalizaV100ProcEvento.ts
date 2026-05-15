import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento';

import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento {
  "@class"?: string;
  evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
  retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
    public retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
