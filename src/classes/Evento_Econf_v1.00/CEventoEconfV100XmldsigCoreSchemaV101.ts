import { TEventoEconfV100XmldsigCoreSchemaV101Signature } from '../../types/Evento_Econf_v1.00/TEventoEconfV100XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoEconfV100XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
