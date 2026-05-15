import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento';

import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento {
  "@class"?: string;
  evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
  retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
    public retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
