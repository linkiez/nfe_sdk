import { CPlNfAg100JEvCancNfAgV100EvCancNfAg } from './CPlNfAg100JEvCancNfAgV100EvCancNfAg';

/**
 * Runtime class for CPlNfAg100JEvCancNfAgV100.
 */
export class CPlNfAg100JEvCancNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento do cancelamento 110111
     */
    public evCancNFAg?: CPlNfAg100JEvCancNfAgV100EvCancNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JEvCancNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JEvCancNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEvCancNfAgV100) {
        this["@class"] = ".CPlNfAg100JEvCancNfAgV100";


        if (props) {

        	this.evCancNFAg = (props.evCancNFAg) ? new CPlNfAg100JEvCancNfAgV100EvCancNfAg(props.evCancNFAg): undefined;
        }
    }
}
