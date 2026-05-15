import { TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
