import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
