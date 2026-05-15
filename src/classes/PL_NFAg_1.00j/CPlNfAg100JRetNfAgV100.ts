import { TPlNfAg100JRetNfAgV100RetNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JRetNfAgV100RetNfAg';

/**
 * Runtime class for CPlNfAg100JRetNfAgV100.
 */
export class CPlNfAg100JRetNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret NFAg.
     */
    public retNFAg?: TPlNfAg100JRetNfAgV100RetNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JRetNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JRetNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JRetNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetNfAgV100";


        if (props) {

        	this.retNFAg = props.retNFAg;
        }
    }
}
