import { CEventoCCePlV101LeiauteCCeV100Evento } from './CEventoCCePlV101LeiauteCCeV100Evento';

import { TEventoCCePlV101LeiauteCCeV100VerEnvEvento } from './TEventoCCePlV101LeiauteCCeV100VerEnvEvento';

export interface IEventoCCePlV101LeiauteCCeV100EnvEvento {
  "@class"?: string;
  evento?: CEventoCCePlV101LeiauteCCeV100Evento;
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;
}

export class CEventoCCePlV101LeiauteCCeV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoCCePlV101LeiauteCCeV100Evento;
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;

    public constructor(props?: CEventoCCePlV101LeiauteCCeV100EnvEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCCePlV101LeiauteCCeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
