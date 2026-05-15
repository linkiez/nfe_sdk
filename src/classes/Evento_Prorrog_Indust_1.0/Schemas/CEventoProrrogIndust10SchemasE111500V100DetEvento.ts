import { CEventoProrrogIndust10SchemasE111500V100ItemPedido } from './CEventoProrrogIndust10SchemasE111500V100ItemPedido';

/**
 * Informações do Pedido de Prorrogação
 */
export class CEventoProrrogIndust10SchemasE111500V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar o número do Protocolo de Autorização da NF-e a ser Prorrogada. (vide item 5.6).
     */
    public nProt?: unknown;
    /**
     * Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação
     */
    public itemPedido?: CEventoProrrogIndust10SchemasE111500V100ItemPedido;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE111500V100DetEvento instance.
     * Schema context: Informações do Pedido de Prorrogação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE111500V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111500V100DetEvento";


        if (props) {

        	this.nProt = props.nProt;
        	this.itemPedido = (props.itemPedido) ? new CEventoProrrogIndust10SchemasE111500V100ItemPedido(props.itemPedido): undefined;
        }
    }
}
