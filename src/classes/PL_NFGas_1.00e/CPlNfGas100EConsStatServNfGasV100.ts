import { TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas';

/**
 * Runtime class for CPlNfGas100EConsStatServNfGasV100.
 */
export class CPlNfGas100EConsStatServNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property cons Stat Serv NFGas.
     */
    public consStatServNFGas?: TPlNfGas100EConsStatServNfGasV100ConsStatServNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EConsStatServNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100EConsStatServNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EConsStatServNfGasV100) {
        this["@class"] = ".CPlNfGas100EConsStatServNfGasV100";


        if (props) {

        	this.consStatServNFGas = props.consStatServNFGas;
        }
    }
}
