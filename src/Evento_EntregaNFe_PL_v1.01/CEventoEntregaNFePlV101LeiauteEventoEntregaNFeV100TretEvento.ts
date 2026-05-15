import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento } from './TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
