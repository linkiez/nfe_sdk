import { TEventoEpecPlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoEpecPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
