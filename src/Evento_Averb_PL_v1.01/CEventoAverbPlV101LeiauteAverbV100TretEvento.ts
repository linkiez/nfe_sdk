import { CEventoAverbPlV101LeiauteAverbV100InfEvento } from './CEventoAverbPlV101LeiauteAverbV100InfEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEvento } from './TEventoAverbPlV101LeiauteAverbV100VerEvento';

export interface IEventoAverbPlV101LeiauteAverbV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoAverbPlV101LeiauteAverbV100InfEvento;
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;
}

export class CEventoAverbPlV101LeiauteAverbV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoAverbPlV101LeiauteAverbV100InfEvento;
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100TretEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoAverbPlV101LeiauteAverbV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
