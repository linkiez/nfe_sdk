import { TPl010CNt2022002V130XmldsigCoreSchemaV101Signature } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TPl010CNt2022002V130XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
