import { CEventoProrrogIndust10SchemasE411500V100ItemPedido } from './CEventoProrrogIndust10SchemasE411500V100ItemPedido';

/**
 * Versão do Fisco
 */
export class CEventoProrrogIndust10SchemasE411500V100RespPedido {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Item do Pedido de Prorrogação
     */
    public itemPedido?: CEventoProrrogIndust10SchemasE411500V100ItemPedido;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE411500V100RespPedido instance.
     * Schema context: Versão do Fisco
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE411500V100RespPedido) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411500V100RespPedido";


        if (props) {

        	this.itemPedido = (props.itemPedido) ? new CEventoProrrogIndust10SchemasE411500V100ItemPedido(props.itemPedido): undefined;
        }
    }
}
