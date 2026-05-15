import { TEventoEconfV100XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_Econf_v1.00/TEventoEconfV100XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101TransformType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoEconfV100XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
