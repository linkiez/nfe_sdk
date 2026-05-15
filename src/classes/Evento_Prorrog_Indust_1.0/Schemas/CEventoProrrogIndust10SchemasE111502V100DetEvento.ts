/**
 * Informações do Cancelamento de Pedido de Prorrogação
 */
export class CEventoProrrogIndust10SchemasE111502V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar o número do Protocolo de Autorização do Pedido de Prorrogaçãoa ser cancelado.
     */
    public nProt?: unknown;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasE111502V100DetEvento instance.
     * Schema context: Informações do Cancelamento de Pedido de Prorrogação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasE111502V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111502V100DetEvento";


        if (props) {

        	this.nProt = props.nProt;
        }
    }
}
