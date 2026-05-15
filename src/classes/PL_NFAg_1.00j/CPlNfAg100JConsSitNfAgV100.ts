import { TPlNfAg100JConsSitNfAgV100ConsSitNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsSitNfAgV100ConsSitNfAg';

/**
 * Runtime class for CPlNfAg100JConsSitNfAgV100.
 */
export class CPlNfAg100JConsSitNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property cons Sit NFAg.
     */
    public consSitNFAg?: TPlNfAg100JConsSitNfAgV100ConsSitNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JConsSitNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JConsSitNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JConsSitNfAgV100) {
        this["@class"] = ".CPlNfAg100JConsSitNfAgV100";


        if (props) {

        	this.consSitNFAg = props.consSitNFAg;
        }
    }
}
