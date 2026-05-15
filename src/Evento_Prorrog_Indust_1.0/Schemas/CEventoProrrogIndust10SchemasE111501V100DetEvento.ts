import { CEventoProrrogIndust10SchemasE111501V100ItemPedido } from './CEventoProrrogIndust10SchemasE111501V100ItemPedido';

export interface IEventoProrrogIndust10SchemasE111501V100DetEvento {
  "@class"?: string;
  nProt?: unknown;
  itemPedido?: CEventoProrrogIndust10SchemasE111501V100ItemPedido;
}

export class CEventoProrrogIndust10SchemasE111501V100DetEvento {
    public "@class"?: string;

    public nProt?: unknown;
    public itemPedido?: CEventoProrrogIndust10SchemasE111501V100ItemPedido;

    public constructor(props?: CEventoProrrogIndust10SchemasE111501V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111501V100DetEvento";


        if (props) {

        	this.nProt = props.nProt;
        	this.itemPedido = (props.itemPedido) ? new CEventoProrrogIndust10SchemasE111501V100ItemPedido(props.itemPedido): undefined;
        }
    }
}
