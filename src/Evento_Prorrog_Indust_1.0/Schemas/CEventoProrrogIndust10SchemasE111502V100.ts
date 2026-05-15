import { CEventoProrrogIndust10SchemasE111502V100DetEvento } from './CEventoProrrogIndust10SchemasE111502V100DetEvento';

export interface IEventoProrrogIndust10SchemasE111502V100 {
  "@class"?: string;
  detEvento?: CEventoProrrogIndust10SchemasE111502V100DetEvento;
}

export class CEventoProrrogIndust10SchemasE111502V100 {
    public "@class"?: string;

    public detEvento?: CEventoProrrogIndust10SchemasE111502V100DetEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasE111502V100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111502V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoProrrogIndust10SchemasE111502V100DetEvento(props.detEvento): undefined;
        }
    }
}
