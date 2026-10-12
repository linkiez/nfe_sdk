import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101";


        if (props) {

            assignSchemaProperties(this, props, ["signature"]);
        }
    }
}
