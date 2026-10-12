import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TConSitNFeXmldsigCoreSchemaV101Signature } from '../../types/ConSitNFe/TConSitNFeXmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101.
 */
export class CConSitNFeXmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TConSitNFeXmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101";


        if (props) {

            assignSchemaProperties(this, props, ["signature"]);
        }
    }
}
