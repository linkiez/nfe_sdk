import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE112140V100GItemNaoFornecido } from './CEventosRtcE112140V100GItemNaoFornecido';

/**
 * Informações do Evento de Fornecimento não realizado com pagamento antecipado
 */
export class CEventosRtcE112140V100DetEvento {
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
    public gItemNaoFornecido?: CEventosRtcE112140V100GItemNaoFornecido;

    /**
     * Creates a new schema-backed CEventosRtcE112140V100DetEvento instance.
     * Schema context: Informações do Evento de Fornecimento não realizado com pagamento antecipado
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112140V100DetEvento) {
        this["@class"] = ".CEventosRtcE112140V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gItemNaoFornecido = (props.gItemNaoFornecido) ? new CEventosRtcE112140V100GItemNaoFornecido(props.gItemNaoFornecido): undefined;
        }
    }
}
