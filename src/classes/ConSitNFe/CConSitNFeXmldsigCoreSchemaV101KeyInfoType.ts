import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CConSitNFeXmldsigCoreSchemaV101X509DataType } from './CConSitNFeXmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101KeyInfoType.
 */
export class CConSitNFeXmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CConSitNFeXmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CConSitNFeXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
