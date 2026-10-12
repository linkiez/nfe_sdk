import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * NFAg processada
 */
export class CPlNfAg100JProcNfAgV100NfagProc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property NFAg.
     */
    public NFAg?: unknown;
    /**
     * Schema property prot NFAg.
     */
    public protNFAg?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JProcNfAgV100NfagProc instance.
     * Schema context: NFAg processada
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JProcNfAgV100NfagProc) {
        this["@class"] = ".CPlNfAg100JProcNfAgV100NfagProc";


        if (props) {

            assignSchemaProperties(this, props, ["NFAg", "protNFAg"]);
        }
    }
}
