import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
