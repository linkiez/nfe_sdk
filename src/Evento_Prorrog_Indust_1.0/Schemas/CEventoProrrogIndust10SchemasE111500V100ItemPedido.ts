export interface IEventoProrrogIndust10SchemasE111500V100ItemPedido {
  "@class"?: string;
  qtdeItem?: unknown;
}

export class CEventoProrrogIndust10SchemasE111500V100ItemPedido {
    public "@class"?: string;

    public qtdeItem?: unknown;

    public constructor(props?: CEventoProrrogIndust10SchemasE111500V100ItemPedido) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111500V100ItemPedido";


        if (props) {

        	this.qtdeItem = props.qtdeItem;
        }
    }
}
