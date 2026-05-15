import { TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento } from './TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento';

export interface IEventoProrrogIndust10SchemasEnvRemIndusV100 {
  "@class"?: string;
  envEvento?: TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento;
}

export class CEventoProrrogIndust10SchemasEnvRemIndusV100 {
    public "@class"?: string;

    public envEvento?: TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasEnvRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasEnvRemIndusV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
