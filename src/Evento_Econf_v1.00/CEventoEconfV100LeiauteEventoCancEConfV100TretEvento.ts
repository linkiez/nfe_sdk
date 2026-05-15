import { CEventoEconfV100LeiauteEventoCancEConfV100InfEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from './TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

export interface IEventoEconfV100LeiauteEventoCancEConfV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEconfV100LeiauteEventoCancEConfV100InfEvento;
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;
}

export class CEventoEconfV100LeiauteEventoCancEConfV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEconfV100LeiauteEventoCancEConfV100InfEvento;
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
