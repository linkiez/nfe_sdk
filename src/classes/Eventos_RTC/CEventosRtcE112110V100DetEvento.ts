import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do Evento de Informação de efetivo pagamento integral para liberar crédito presumido do adquirente
 */
export class CEventosRtcE112110V100DetEvento {
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
     * Creates a new schema-backed CEventosRtcE112110V100DetEvento instance.
     * Schema context: Informações do Evento de Informação de efetivo pagamento integral para liberar crédito presumido do adquirente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112110V100DetEvento) {
        this["@class"] = ".CEventosRtcE112110V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        }
    }
}
