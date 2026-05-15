import { TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoAverbPlV101XmldsigCoreSchemaV101TransformType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property XPath.
     */
    public XPath?: string;
    /**
     * Schema attribute algorithm.
     */
    public $Algorithm?: TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoAverbPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
