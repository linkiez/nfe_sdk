import { CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
