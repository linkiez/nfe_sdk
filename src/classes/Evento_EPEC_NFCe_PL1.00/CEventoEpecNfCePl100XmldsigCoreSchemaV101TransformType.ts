import { TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
