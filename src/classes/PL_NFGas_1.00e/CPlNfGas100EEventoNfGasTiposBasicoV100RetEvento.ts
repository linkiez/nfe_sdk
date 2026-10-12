import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento';

/**
 * Tipo retorno do Evento
 */
export class CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento {
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
     * Schema attribute versao.
     */
    public $versao?: any;

    /**
     * Creates a new schema-backed CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
