import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
