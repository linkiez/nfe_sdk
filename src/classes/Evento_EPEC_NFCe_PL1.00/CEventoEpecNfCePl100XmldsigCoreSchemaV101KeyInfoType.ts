import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
