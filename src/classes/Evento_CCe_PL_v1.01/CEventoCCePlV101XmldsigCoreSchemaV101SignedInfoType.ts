import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
