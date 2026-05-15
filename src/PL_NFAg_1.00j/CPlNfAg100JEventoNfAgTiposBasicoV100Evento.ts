import { CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento';

import { TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento } from './TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento';

export interface IPlNfAg100JEventoNfAgTiposBasicoV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento;
  $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;
}

export class CPlNfAg100JEventoNfAgTiposBasicoV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento;
    public $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;

    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100Evento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
