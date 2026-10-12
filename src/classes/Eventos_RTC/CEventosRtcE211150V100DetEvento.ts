import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211150V100GCredito } from './CEventosRtcE211150V100GCredito';

/**
 * Informações do Evento de Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente
 */
export class CEventosRtcE211150V100DetEvento {
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
     * Informações de crédito
     */
    public gCredito?: CEventosRtcE211150V100GCredito;

    /**
     * Creates a new schema-backed CEventosRtcE211150V100DetEvento instance.
     * Schema context: Informações do Evento de Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211150V100DetEvento) {
        this["@class"] = ".CEventosRtcE211150V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gCredito = (props.gCredito) ? new CEventosRtcE211150V100GCredito(props.gCredito): undefined;
        }
    }
}
