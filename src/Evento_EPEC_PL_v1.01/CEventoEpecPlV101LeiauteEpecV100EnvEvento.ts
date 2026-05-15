import { CEventoEpecPlV101LeiauteEpecV100Evento } from './CEventoEpecPlV101LeiauteEpecV100Evento';

import { TEventoEpecPlV101LeiauteEpecV100VerEnvEvento } from './TEventoEpecPlV101LeiauteEpecV100VerEnvEvento';

export interface IEventoEpecPlV101LeiauteEpecV100EnvEvento {
  "@class"?: string;
  evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;
}

export class CEventoEpecPlV101LeiauteEpecV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100EnvEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEpecPlV101LeiauteEpecV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
