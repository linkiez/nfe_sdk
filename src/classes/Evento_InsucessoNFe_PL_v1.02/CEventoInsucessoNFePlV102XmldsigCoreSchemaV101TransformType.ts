import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
