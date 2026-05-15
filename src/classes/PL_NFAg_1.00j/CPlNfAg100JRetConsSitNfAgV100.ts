import { TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg';

/**
 * Runtime class for CPlNfAg100JRetConsSitNfAgV100.
 */
export class CPlNfAg100JRetConsSitNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Cons Sit NFAg.
     */
    public retConsSitNFAg?: TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JRetConsSitNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JRetConsSitNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JRetConsSitNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetConsSitNfAgV100";


        if (props) {

        	this.retConsSitNFAg = props.retConsSitNFAg;
        }
    }
}
