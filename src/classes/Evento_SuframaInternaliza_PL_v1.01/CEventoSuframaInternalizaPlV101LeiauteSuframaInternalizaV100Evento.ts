import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento {
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
    public infEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
