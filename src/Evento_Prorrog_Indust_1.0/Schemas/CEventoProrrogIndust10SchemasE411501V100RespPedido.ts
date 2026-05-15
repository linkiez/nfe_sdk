import { CEventoProrrogIndust10SchemasE411501V100ItemPedido } from './CEventoProrrogIndust10SchemasE411501V100ItemPedido';

export interface IEventoProrrogIndust10SchemasE411501V100RespPedido {
  "@class"?: string;
  itemPedido?: CEventoProrrogIndust10SchemasE411501V100ItemPedido;
}

export class CEventoProrrogIndust10SchemasE411501V100RespPedido {
    public "@class"?: string;

    public itemPedido?: CEventoProrrogIndust10SchemasE411501V100ItemPedido;

    public constructor(props?: CEventoProrrogIndust10SchemasE411501V100RespPedido) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411501V100RespPedido";


        if (props) {

        	this.itemPedido = (props.itemPedido) ? new CEventoProrrogIndust10SchemasE411501V100ItemPedido(props.itemPedido): undefined;
        }
    }
}
