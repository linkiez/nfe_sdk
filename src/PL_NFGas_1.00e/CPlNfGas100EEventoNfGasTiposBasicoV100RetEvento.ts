import { CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento';

export interface IPlNfGas100EEventoNfGasTiposBasicoV100RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento;
  $versao?: any;
}

export class CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento;
    public $versao?: any;

    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
