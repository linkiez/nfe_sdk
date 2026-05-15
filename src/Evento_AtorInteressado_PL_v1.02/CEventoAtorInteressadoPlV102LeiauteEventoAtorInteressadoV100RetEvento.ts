import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento } from './TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento';

export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento;
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;
}

export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento;
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
