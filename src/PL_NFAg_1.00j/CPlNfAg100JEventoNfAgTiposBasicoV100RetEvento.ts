import { CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento';

export interface IPlNfAg100JEventoNfAgTiposBasicoV100RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento;
  $versao?: any;
}

export class CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento;
    public $versao?: any;

    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
