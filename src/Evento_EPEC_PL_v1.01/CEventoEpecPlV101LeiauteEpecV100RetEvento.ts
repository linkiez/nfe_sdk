import { CEventoEpecPlV101LeiauteEpecV100InfEvento } from './CEventoEpecPlV101LeiauteEpecV100InfEvento';

import { TEventoEpecPlV101LeiauteEpecV100VerEvento } from './TEventoEpecPlV101LeiauteEpecV100VerEvento';

export interface IEventoEpecPlV101LeiauteEpecV100RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEpecPlV101LeiauteEpecV100InfEvento;
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;
}

export class CEventoEpecPlV101LeiauteEpecV100RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEpecPlV101LeiauteEpecV100InfEvento;
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100RetEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEpecPlV101LeiauteEpecV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
