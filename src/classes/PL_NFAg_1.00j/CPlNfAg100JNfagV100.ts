import { TPlNfAg100JNfagV100NfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagV100NfAg';

/**
 * Runtime class for CPlNfAg100JNfagV100.
 */
export class CPlNfAg100JNfagV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property n FAg.
     */
    public nFAg?: TPlNfAg100JNfagV100NfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagV100 instance.
     * Schema context: Runtime class for CPlNfAg100JNfagV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagV100) {
        this["@class"] = ".CPlNfAg100JNfagV100";


        if (props) {

        	this.nFAg = props.nFAg;
        }
    }
}
