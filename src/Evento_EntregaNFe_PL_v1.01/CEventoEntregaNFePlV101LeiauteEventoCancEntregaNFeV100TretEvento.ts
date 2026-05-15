import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento } from './TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
