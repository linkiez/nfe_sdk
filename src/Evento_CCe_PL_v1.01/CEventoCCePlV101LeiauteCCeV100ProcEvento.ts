import { CEventoCCePlV101LeiauteCCeV100Evento } from './CEventoCCePlV101LeiauteCCeV100Evento';

import { CEventoCCePlV101LeiauteCCeV100TretEvento } from './CEventoCCePlV101LeiauteCCeV100TretEvento';

import { TEventoCCePlV101LeiauteCCeV100VerEvento } from './TEventoCCePlV101LeiauteCCeV100VerEvento';

export interface IEventoCCePlV101LeiauteCCeV100ProcEvento {
  "@class"?: string;
  evento?: CEventoCCePlV101LeiauteCCeV100Evento;
  retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;
}

export class CEventoCCePlV101LeiauteCCeV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoCCePlV101LeiauteCCeV100Evento;
    public retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;

    public constructor(props?: CEventoCCePlV101LeiauteCCeV100ProcEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCCePlV101LeiauteCCeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoCCePlV101LeiauteCCeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
