import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211110V100GCredPres } from './CEventosRtcE211110V100GCredPres';

/**
 * Informações do Evento de Solicitação de Apropriação de crédito presumido
 */
export class CEventosRtcE211110V100DetEvento {
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
     * Informações de crédito presumido por item
     */
    public gCredPres?: CEventosRtcE211110V100GCredPres;

    /**
     * Creates a new schema-backed CEventosRtcE211110V100DetEvento instance.
     * Schema context: Informações do Evento de Solicitação de Apropriação de crédito presumido
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211110V100DetEvento) {
        this["@class"] = ".CEventosRtcE211110V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gCredPres = (props.gCredPres) ? new CEventosRtcE211110V100GCredPres(props.gCredPres): undefined;
        }
    }
}
