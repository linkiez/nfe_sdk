import { CEventoProrrogIndust10SchemasE411503V100RespCancPedido } from './CEventoProrrogIndust10SchemasE411503V100RespCancPedido';

export interface IEventoProrrogIndust10SchemasE411503V100DetEvento {
  "@class"?: string;
  respCancPedido?: CEventoProrrogIndust10SchemasE411503V100RespCancPedido;
}

export class CEventoProrrogIndust10SchemasE411503V100DetEvento {
    public "@class"?: string;

    public respCancPedido?: CEventoProrrogIndust10SchemasE411503V100RespCancPedido;

    public constructor(props?: CEventoProrrogIndust10SchemasE411503V100DetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411503V100DetEvento";


        if (props) {

        	this.respCancPedido = (props.respCancPedido) ? new CEventoProrrogIndust10SchemasE411503V100RespCancPedido(props.respCancPedido): undefined;
        }
    }
}
