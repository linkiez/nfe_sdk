import { TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento } from './TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento';

export interface IEventoProrrogIndust10SchemasRetEnvRemIndusV100 {
  "@class"?: string;
  retEnvEvento?: TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento;
}

export class CEventoProrrogIndust10SchemasRetEnvRemIndusV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasRetEnvRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasRetEnvRemIndusV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
