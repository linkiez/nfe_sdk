import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
