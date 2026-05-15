import { CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento';

import { TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento } from '../../types/PL_NFGas_1.00e/TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento';

/**
 * Tipo Evento
 */
export class CPlNfGas100EEventoNfGasTiposBasicoV100Evento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public infEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;

    /**
     * Creates a new schema-backed CPlNfGas100EEventoNfGasTiposBasicoV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100Evento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
