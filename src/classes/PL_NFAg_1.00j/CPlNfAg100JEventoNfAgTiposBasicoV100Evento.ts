import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento';

import { TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento } from '../../types/PL_NFAg_1.00j/TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento';

/**
 * Tipo Evento
 */
export class CPlNfAg100JEventoNfAgTiposBasicoV100Evento {
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
     * Tipo Versão do Evento
     */
    public $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;

    /**
     * Creates a new schema-backed CPlNfAg100JEventoNfAgTiposBasicoV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100Evento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100Evento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
