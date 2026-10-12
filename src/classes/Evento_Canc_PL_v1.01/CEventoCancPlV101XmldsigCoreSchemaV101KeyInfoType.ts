import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoCancPlV101XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoCancPlV101XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoCancPlV101XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoCancPlV101XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCancPlV101XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoCancPlV101XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoCancPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
