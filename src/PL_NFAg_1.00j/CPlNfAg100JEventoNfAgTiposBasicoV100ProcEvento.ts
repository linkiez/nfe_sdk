import { CPlNfAg100JEventoNfAgTiposBasicoV100Evento } from './CPlNfAg100JEventoNfAgTiposBasicoV100Evento';

import { CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento';

import { TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento } from './TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento';

export interface IPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento {
  "@class"?: string;
  eventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100Evento;
  retEventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento;
  $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;
  $ipTransmissor?: unknown;
  $nPortaCon?: any;
  $dhConexao?: unknown;
}

export class CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento {
    public "@class"?: string;

    public eventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100Evento;
    public retEventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento;
    public $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;
    public $ipTransmissor?: unknown;
    public $nPortaCon?: any;
    public $dhConexao?: unknown;

    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento";


        if (props) {

        	this.eventoNFAg = (props.eventoNFAg) ? new CPlNfAg100JEventoNfAgTiposBasicoV100Evento(props.eventoNFAg): undefined;
        	this.retEventoNFAg = (props.retEventoNFAg) ? new CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento(props.retEventoNFAg): undefined;
        	this.$versao = props.$versao;
        	this.$ipTransmissor = props.$ipTransmissor;
        	this.$nPortaCon = props.$nPortaCon;
        	this.$dhConexao = props.$dhConexao;
        }
    }
}
