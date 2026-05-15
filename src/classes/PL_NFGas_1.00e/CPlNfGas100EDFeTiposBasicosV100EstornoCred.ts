import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Estorno de Crédito
 */
export class CPlNfGas100EDFeTiposBasicosV100EstornoCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS a ser estornado
     */
    public vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS a ser estornada
     */
    public vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100EstornoCred instance.
     * Schema context: Tipo Estorno de Crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100EstornoCred) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100EstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
