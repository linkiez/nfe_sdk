import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101.
 */
export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
