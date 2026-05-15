import { TEventoProrrogIndust10SchemasEventoRemIndusV100Evento } from './TEventoProrrogIndust10SchemasEventoRemIndusV100Evento';

export interface IEventoProrrogIndust10SchemasEventoRemIndusV100 {
  "@class"?: string;
  evento?: TEventoProrrogIndust10SchemasEventoRemIndusV100Evento;
}

export class CEventoProrrogIndust10SchemasEventoRemIndusV100 {
    public "@class"?: string;

    public evento?: TEventoProrrogIndust10SchemasEventoRemIndusV100Evento;

    public constructor(props?: CEventoProrrogIndust10SchemasEventoRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasEventoRemIndusV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
