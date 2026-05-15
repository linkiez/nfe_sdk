import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
