import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
