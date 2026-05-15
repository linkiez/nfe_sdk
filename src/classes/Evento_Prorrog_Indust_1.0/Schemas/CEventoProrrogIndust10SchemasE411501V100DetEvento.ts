import { CEventoProrrogIndust10SchemasE411501V100RespPedido } from './CEventoProrrogIndust10SchemasE411501V100RespPedido';

/**
 * Informações do Fisco
 */
export class CEventoProrrogIndust10SchemasE411501V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão do Fisco
     */
    public respPedido?: CEventoProrrogIndust10SchemasE411501V100RespPedido;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE411501V100DetEvento instance.
     * Schema context: Informações do Fisco
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE411501V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411501V100DetEvento";


        if (props) {

        	this.respPedido = (props.respPedido) ? new CEventoProrrogIndust10SchemasE411501V100RespPedido(props.respPedido): undefined;
        }
    }
}
