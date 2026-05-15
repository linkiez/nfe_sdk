import { CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento';

import { TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento } from './TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento';

export interface IPlNfGas100EEventoNfGasTiposBasicoV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento;
  $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;
}

export class CPlNfGas100EEventoNfGasTiposBasicoV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento;
    public $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;

    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100Evento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
