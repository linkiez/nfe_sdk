import { TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas';

/**
 * Runtime class for CPlNfGas100ERetConsStatServNfGasV100.
 */
export class CPlNfGas100ERetConsStatServNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Cons Stat Serv NFGas.
     */
    public retConsStatServNFGas?: TPlNfGas100ERetConsStatServNfGasV100RetConsStatServNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ERetConsStatServNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100ERetConsStatServNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ERetConsStatServNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetConsStatServNfGasV100";


        if (props) {

        	this.retConsStatServNFGas = props.retConsStatServNFGas;
        }
    }
}
