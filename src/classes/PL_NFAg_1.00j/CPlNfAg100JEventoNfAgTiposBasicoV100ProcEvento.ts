import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JEventoNfAgTiposBasicoV100Evento } from './CPlNfAg100JEventoNfAgTiposBasicoV100Evento';

import { CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento';

import { TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento } from '../../types/PL_NFAg_1.00j/TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento';

/**
 * Tipo procEvento
 */
export class CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public eventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;
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
     * Creates a new schema-backed CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento";


        if (props) {

        	this.eventoNFAg = (props.eventoNFAg) ? new CPlNfAg100JEventoNfAgTiposBasicoV100Evento(props.eventoNFAg): undefined;
        	this.retEventoNFAg = (props.retEventoNFAg) ? new CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento(props.retEventoNFAg): undefined;
            assignSchemaProperties(this, props, ["$versao", "$ipTransmissor", "$nPortaCon", "$dhConexao"]);
        }
    }
}
