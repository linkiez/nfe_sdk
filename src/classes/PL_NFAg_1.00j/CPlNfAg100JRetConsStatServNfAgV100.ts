import { TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg';

/**
 * Runtime class for CPlNfAg100JRetConsStatServNfAgV100.
 */
export class CPlNfAg100JRetConsStatServNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Cons Stat Serv NFAg.
     */
    public retConsStatServNFAg?: TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JRetConsStatServNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JRetConsStatServNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JRetConsStatServNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetConsStatServNfAgV100";


        if (props) {

        	this.retConsStatServNFAg = props.retConsStatServNFAg;
        }
    }
}
