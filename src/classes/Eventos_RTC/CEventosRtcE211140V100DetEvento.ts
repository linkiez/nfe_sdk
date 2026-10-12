import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211140V100GConsumoComb } from './CEventosRtcE211140V100GConsumoComb';

/**
 * Informações do Evento de Solicitação de Apropriação de Crédito de Combustível
 */
export class CEventosRtcE211140V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Informações de consumo de combustíveis
     */
    public gConsumoComb?: CEventosRtcE211140V100GConsumoComb;

    /**
     * Creates a new schema-backed CEventosRtcE211140V100DetEvento instance.
     * Schema context: Informações do Evento de Solicitação de Apropriação de Crédito de Combustível
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211140V100DetEvento) {
        this["@class"] = ".CEventosRtcE211140V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gConsumoComb = (props.gConsumoComb) ? new CEventosRtcE211140V100GConsumoComb(props.gConsumoComb): undefined;
        }
    }
}
