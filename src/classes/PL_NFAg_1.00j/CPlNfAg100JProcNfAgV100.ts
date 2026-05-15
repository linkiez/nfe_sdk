import { CPlNfAg100JProcNfAgV100NfagProc } from './CPlNfAg100JProcNfAgV100NfagProc';

/**
 * Runtime class for CPlNfAg100JProcNfAgV100.
 */
export class CPlNfAg100JProcNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * NFAg processada
     */
    public nfagProc?: CPlNfAg100JProcNfAgV100NfagProc;

    /**
     * Creates a new schema-backed CPlNfAg100JProcNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JProcNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JProcNfAgV100) {
        this["@class"] = ".CPlNfAg100JProcNfAgV100";


        if (props) {

        	this.nfagProc = (props.nfagProc) ? new CPlNfAg100JProcNfAgV100NfagProc(props.nfagProc): undefined;
        }
    }
}
