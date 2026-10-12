import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
