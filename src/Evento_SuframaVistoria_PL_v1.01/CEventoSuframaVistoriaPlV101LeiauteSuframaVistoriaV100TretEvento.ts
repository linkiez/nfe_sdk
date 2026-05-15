import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento;
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento;
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
