import { CEventoProrrogIndust10SchemasE411500V100RespPedido } from './CEventoProrrogIndust10SchemasE411500V100RespPedido';

export interface IEventoProrrogIndust10SchemasE411500V100DetEvento {
  "@class"?: string;
  respPedido?: CEventoProrrogIndust10SchemasE411500V100RespPedido;
}

export class CEventoProrrogIndust10SchemasE411500V100DetEvento {
    public "@class"?: string;

    public respPedido?: CEventoProrrogIndust10SchemasE411500V100RespPedido;

    public constructor(props?: CEventoProrrogIndust10SchemasE411500V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411500V100DetEvento";


        if (props) {

        	this.respPedido = (props.respPedido) ? new CEventoProrrogIndust10SchemasE411500V100RespPedido(props.respPedido): undefined;
        }
    }
}
