/**
 * Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação
 */
export class CEventoProrrogIndust10SchemasE111500V100ItemPedido {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade do item que será solicitado a prorrogação de prazo
     */
    public qtdeItem?: unknown;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE111500V100ItemPedido instance.
     * Schema context: Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE111500V100ItemPedido) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111500V100ItemPedido";


        if (props) {

        	this.qtdeItem = props.qtdeItem;
        }
    }
}
