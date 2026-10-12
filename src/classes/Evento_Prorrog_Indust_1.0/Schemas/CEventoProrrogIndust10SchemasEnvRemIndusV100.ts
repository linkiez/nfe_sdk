import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento';

/**
 * Runtime class for CEventoProrrogIndust10SchemasEnvRemIndusV100.
 */
export class CEventoProrrogIndust10SchemasEnvRemIndusV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoProrrogIndust10SchemasEnvRemIndusV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasEnvRemIndusV100 instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasEnvRemIndusV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasEnvRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasEnvRemIndusV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
