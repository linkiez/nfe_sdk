import { CEventoProrrogIndust10SchemasE411503V100DetEvento } from './CEventoProrrogIndust10SchemasE411503V100DetEvento';

export interface IEventoProrrogIndust10SchemasE411503V100 {
  "@class"?: string;
  detEvento?: CEventoProrrogIndust10SchemasE411503V100DetEvento;
}

export class CEventoProrrogIndust10SchemasE411503V100 {
    public "@class"?: string;

    public detEvento?: CEventoProrrogIndust10SchemasE411503V100DetEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasE411503V100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasE411503V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoProrrogIndust10SchemasE411503V100DetEvento(props.detEvento): undefined;
        }
    }
}
