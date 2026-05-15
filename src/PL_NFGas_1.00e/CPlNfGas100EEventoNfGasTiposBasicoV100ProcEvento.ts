import { CPlNfGas100EEventoNfGasTiposBasicoV100Evento } from './CPlNfGas100EEventoNfGasTiposBasicoV100Evento';

import { CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento';

import { TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento } from './TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento';

export interface IPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento {
  "@class"?: string;
  eventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100Evento;
  retEventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento;
  $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;
  $ipTransmissor?: unknown;
  $nPortaCon?: any;
  $dhConexao?: unknown;
}

export class CPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento {
    public "@class"?: string;

    public eventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100Evento;
    public retEventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento;
    public $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;
    public $ipTransmissor?: unknown;
    public $nPortaCon?: any;
    public $dhConexao?: unknown;

    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento";


        if (props) {

        	this.eventoNFGas = (props.eventoNFGas) ? new CPlNfGas100EEventoNfGasTiposBasicoV100Evento(props.eventoNFGas): undefined;
        	this.retEventoNFGas = (props.retEventoNFGas) ? new CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento(props.retEventoNFGas): undefined;
        	this.$versao = props.$versao;
        	this.$ipTransmissor = props.$ipTransmissor;
        	this.$nPortaCon = props.$nPortaCon;
        	this.$dhConexao = props.$dhConexao;
        }
    }
}
