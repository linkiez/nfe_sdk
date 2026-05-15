import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101.
 */
export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
