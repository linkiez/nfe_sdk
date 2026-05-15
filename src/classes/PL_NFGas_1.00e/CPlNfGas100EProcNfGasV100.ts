import { CPlNfGas100EProcNfGasV100NfgasProc } from './CPlNfGas100EProcNfGasV100NfgasProc';

/**
 * Runtime class for CPlNfGas100EProcNfGasV100.
 */
export class CPlNfGas100EProcNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * NFGas processada
     */
    public nfgasProc?: CPlNfGas100EProcNfGasV100NfgasProc;

    /**
     * Creates a new schema-backed CPlNfGas100EProcNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100EProcNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EProcNfGasV100) {
        this["@class"] = ".CPlNfGas100EProcNfGasV100";


        if (props) {

        	this.nfgasProc = (props.nfgasProc) ? new CPlNfGas100EProcNfGasV100NfgasProc(props.nfgasProc): undefined;
        }
    }
}
