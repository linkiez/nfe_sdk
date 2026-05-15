import { CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
