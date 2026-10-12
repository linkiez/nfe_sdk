import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do Evento de Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão
 */
export class CEventosRtcE412120V100DetEvento {
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
     * Creates a new schema-backed CEventosRtcE412120V100DetEvento instance.
     * Schema context: Informações do Evento de Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE412120V100DetEvento) {
        this["@class"] = ".CEventosRtcE412120V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        }
    }
}
