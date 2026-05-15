import { CEventoCCePlV101LeiauteCCeV100InfEvento } from './CEventoCCePlV101LeiauteCCeV100InfEvento';

import { TEventoCCePlV101LeiauteCCeV100VerEvento } from './TEventoCCePlV101LeiauteCCeV100VerEvento';

export interface IEventoCCePlV101LeiauteCCeV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoCCePlV101LeiauteCCeV100InfEvento;
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;
}

export class CEventoCCePlV101LeiauteCCeV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoCCePlV101LeiauteCCeV100InfEvento;
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;

    public constructor(props?: CEventoCCePlV101LeiauteCCeV100TretEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoCCePlV101LeiauteCCeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
