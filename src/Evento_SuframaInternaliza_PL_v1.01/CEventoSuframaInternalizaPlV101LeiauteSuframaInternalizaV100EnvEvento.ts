import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento {
  "@class"?: string;
  evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
