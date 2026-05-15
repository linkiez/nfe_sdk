/**
 * NFGas processada
 */
export class CPlNfGas100EProcNfGasV100NfgasProc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property NFGas.
     */
    public NFGas?: unknown;
    /**
     * Schema property prot NFGas.
     */
    public protNFGas?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100EProcNfGasV100NfgasProc instance.
     * Schema context: NFGas processada
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EProcNfGasV100NfgasProc) {
        this["@class"] = ".CPlNfGas100EProcNfGasV100NfgasProc";


        if (props) {

        	this.NFGas = props.NFGas;
        	this.protNFGas = props.protNFGas;
        }
    }
}
