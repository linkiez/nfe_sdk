import { CEventoProrrogIndust10SchemasE111500V100DetEvento } from './CEventoProrrogIndust10SchemasE111500V100DetEvento';

export interface IEventoProrrogIndust10SchemasE111500V100 {
  "@class"?: string;
  detEvento?: CEventoProrrogIndust10SchemasE111500V100DetEvento;
}

export class CEventoProrrogIndust10SchemasE111500V100 {
    public "@class"?: string;

    public detEvento?: CEventoProrrogIndust10SchemasE111500V100DetEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasE111500V100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE111500V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoProrrogIndust10SchemasE111500V100DetEvento(props.detEvento): undefined;
        }
    }
}
