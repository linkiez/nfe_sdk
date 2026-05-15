import { CEventoEconfV100LeiauteEventoEConfV100InfEvento } from './CEventoEconfV100LeiauteEventoEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEvento } from './TEventoEconfV100LeiauteEventoEConfV100VerEvento';

export interface IEventoEconfV100LeiauteEventoEConfV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEconfV100LeiauteEventoEConfV100InfEvento;
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;
}

export class CEventoEconfV100LeiauteEventoEConfV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEconfV100LeiauteEventoEConfV100InfEvento;
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100Evento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEconfV100LeiauteEventoEConfV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
