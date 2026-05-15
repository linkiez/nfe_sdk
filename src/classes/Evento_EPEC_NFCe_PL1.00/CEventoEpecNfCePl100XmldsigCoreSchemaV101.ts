import { TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
