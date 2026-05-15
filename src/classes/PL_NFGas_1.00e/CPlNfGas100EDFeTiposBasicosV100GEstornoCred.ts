import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totalização do estorno de crédito
 */
export class CPlNfGas100EDFeTiposBasicosV100GEstornoCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor total do IBS estornado
     */
    public vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS estornada
     */
    public vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GEstornoCred instance.
     * Schema context: Totalização do estorno de crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GEstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
