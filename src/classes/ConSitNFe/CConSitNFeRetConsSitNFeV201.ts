import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TConSitNFeRetConsSitNFeV201RetConsSitNFe } from '../../types/ConSitNFe/TConSitNFeRetConsSitNFeV201RetConsSitNFe';

/**
 * Runtime class for CConSitNFeRetConsSitNFeV201.
 */
export class CConSitNFeRetConsSitNFeV201 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Cons Sit NFe.
     */
    public retConsSitNFe?: TConSitNFeRetConsSitNFeV201RetConsSitNFe;

    /**
     * Creates a new schema-backed CConSitNFeRetConsSitNFeV201 instance.
     * Schema context: Runtime class for CConSitNFeRetConsSitNFeV201.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeRetConsSitNFeV201) {
        this["@class"] = ".CConSitNFeRetConsSitNFeV201";


        if (props) {

            assignSchemaProperties(this, props, ["retConsSitNFe"]);
        }
    }
}
