import { CPlNfGas100EEventoNfGasTiposBasicoV100Evento } from './CPlNfGas100EEventoNfGasTiposBasicoV100Evento';

import { CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento';

import { TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento } from '../../types/PL_NFGas_1.00e/TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento';

/**
 * Tipo procEvento
 */
export class CPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public eventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;
    /**
     * Schema attribute ip transmissor.
     */
    public $ipTransmissor?: unknown;
    /**
     * Schema attribute n porta con.
     */
    public $nPortaCon?: any;
    /**
     * Schema attribute dh conexao.
     */
    public $dhConexao?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
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
