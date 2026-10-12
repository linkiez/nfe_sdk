import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE112130V100GPerecimento } from './CEventosRtcE112130V100GPerecimento';

/**
 * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor
 */
export class CEventosRtcE112130V100DetEvento {
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
     * Informações por item da Nota de Fornecimento
     */
    public gPerecimento?: CEventosRtcE112130V100GPerecimento;

    /**
     * Creates a new schema-backed CEventosRtcE112130V100DetEvento instance.
     * Schema context: Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112130V100DetEvento) {
        this["@class"] = ".CEventosRtcE112130V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gPerecimento = (props.gPerecimento) ? new CEventosRtcE112130V100GPerecimento(props.gPerecimento): undefined;
        }
    }
}
