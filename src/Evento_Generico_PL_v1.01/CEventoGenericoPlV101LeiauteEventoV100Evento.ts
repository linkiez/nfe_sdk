import { CEventoGenericoPlV101LeiauteEventoV100InfEvento } from './CEventoGenericoPlV101LeiauteEventoV100InfEvento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEvento } from './TEventoGenericoPlV101LeiauteEventoV100VerEvento';

export interface IEventoGenericoPlV101LeiauteEventoV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoGenericoPlV101LeiauteEventoV100InfEvento;
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;
}

export class CEventoGenericoPlV101LeiauteEventoV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoGenericoPlV101LeiauteEventoV100InfEvento;
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;

    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100Evento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoGenericoPlV101LeiauteEventoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
