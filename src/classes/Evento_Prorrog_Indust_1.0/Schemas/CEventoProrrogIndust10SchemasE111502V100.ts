import { CEventoProrrogIndust10SchemasE111502V100DetEvento } from './CEventoProrrogIndust10SchemasE111502V100DetEvento';

/**
 * Runtime class for CEventoProrrogIndust10SchemasE111502V100.
 */
export class CEventoProrrogIndust10SchemasE111502V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Cancelamento de Pedido de Prorrogação
     */
    public detEvento?: CEventoProrrogIndust10SchemasE111502V100DetEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE111502V100 instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasE111502V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE111502V100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111502V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoProrrogIndust10SchemasE111502V100DetEvento(props.detEvento): undefined;
        }
    }
}
