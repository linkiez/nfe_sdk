import { CEventosRtcE112140V100GControleEstoque } from './CEventosRtcE112140V100GControleEstoque';

/**
 * Informações por item da Nota de Fornecimento
 */
export class CEventosRtcE112140V100GItemNaoFornecido {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS na nota de débito de pagamento antecipado correspondente à quantidade que não foi fornecida
     */
    public vIBS?: unknown;
    /**
     * Valor da CBS na nota de débito de pagamento antecipado correspondente à quantidade que não foi fornecida.
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade que não foi fornecida e teve o imposto antecipado
     */
    public gControleEstoque?: CEventosRtcE112140V100GControleEstoque;

    /**
     * Creates a new schema-backed CEventosRtcE112140V100GItemNaoFornecido instance.
     * Schema context: Informações por item da Nota de Fornecimento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112140V100GItemNaoFornecido) {
        this["@class"] = ".CEventosRtcE112140V100GItemNaoFornecido";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE112140V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
