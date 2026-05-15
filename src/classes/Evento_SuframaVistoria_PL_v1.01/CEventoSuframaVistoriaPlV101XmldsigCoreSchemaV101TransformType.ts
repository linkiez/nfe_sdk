import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
