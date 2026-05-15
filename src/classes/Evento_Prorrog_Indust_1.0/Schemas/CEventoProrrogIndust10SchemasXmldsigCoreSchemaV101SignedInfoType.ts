import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
