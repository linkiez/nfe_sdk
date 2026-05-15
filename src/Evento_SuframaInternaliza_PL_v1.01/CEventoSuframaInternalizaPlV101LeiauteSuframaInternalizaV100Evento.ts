import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento;
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento;
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
