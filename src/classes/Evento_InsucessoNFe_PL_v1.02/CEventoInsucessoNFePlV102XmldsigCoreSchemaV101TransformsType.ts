import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
