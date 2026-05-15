import { TEventoAverbPlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101.
 */
export class CEventoAverbPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoAverbPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoAverbPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
