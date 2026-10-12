import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento';

/**
 * Runtime class for CEventoProrrogIndust10SchemasRetEnvRemIndusV100.
 */
export class CEventoProrrogIndust10SchemasRetEnvRemIndusV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoProrrogIndust10SchemasRetEnvRemIndusV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasRetEnvRemIndusV100 instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasRetEnvRemIndusV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasRetEnvRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasRetEnvRemIndusV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
