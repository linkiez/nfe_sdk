import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento {
  "@class"?: string;
  evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
