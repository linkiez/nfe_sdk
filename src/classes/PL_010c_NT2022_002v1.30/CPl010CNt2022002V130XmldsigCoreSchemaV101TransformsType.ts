import { CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
