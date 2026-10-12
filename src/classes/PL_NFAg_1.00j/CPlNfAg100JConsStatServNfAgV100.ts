import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg';

/**
 * Runtime class for CPlNfAg100JConsStatServNfAgV100.
 */
export class CPlNfAg100JConsStatServNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property cons Stat Serv NFAg.
     */
    public consStatServNFAg?: TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JConsStatServNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JConsStatServNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JConsStatServNfAgV100) {
        this["@class"] = ".CPlNfAg100JConsStatServNfAgV100";


        if (props) {

            assignSchemaProperties(this, props, ["consStatServNFAg"]);
        }
    }
}
