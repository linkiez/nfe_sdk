import { CEventoProrrogIndust10SchemasE411503V100RespCancPedido } from './CEventoProrrogIndust10SchemasE411503V100RespCancPedido';

/**
 * Informações do Fisco
 */
export class CEventoProrrogIndust10SchemasE411503V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão do Fisco
     */
    public respCancPedido?: CEventoProrrogIndust10SchemasE411503V100RespCancPedido;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE411503V100DetEvento instance.
     * Schema context: Informações do Fisco
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE411503V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411503V100DetEvento";


        if (props) {

        	this.respCancPedido = (props.respCancPedido) ? new CEventoProrrogIndust10SchemasE411503V100RespCancPedido(props.respCancPedido): undefined;
        }
    }
}
