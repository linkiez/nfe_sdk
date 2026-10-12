import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento {
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
    public infEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
