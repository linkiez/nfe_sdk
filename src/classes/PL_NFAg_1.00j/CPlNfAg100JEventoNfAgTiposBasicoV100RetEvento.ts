import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento';

/**
 * Tipo retorno do Evento
 */
export class CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento {
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
    public infEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento;
    /**
     * Schema attribute versao.
     */
    public $versao?: any;

    /**
     * Creates a new schema-backed CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
