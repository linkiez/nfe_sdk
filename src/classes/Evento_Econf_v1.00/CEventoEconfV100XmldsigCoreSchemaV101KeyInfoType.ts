import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEconfV100XmldsigCoreSchemaV101X509DataType } from './CEventoEconfV100XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoEconfV100XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEconfV100XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
