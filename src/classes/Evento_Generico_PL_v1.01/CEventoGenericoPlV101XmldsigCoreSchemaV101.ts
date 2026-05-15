import { TEventoGenericoPlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101.
 */
export class CEventoGenericoPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoGenericoPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
