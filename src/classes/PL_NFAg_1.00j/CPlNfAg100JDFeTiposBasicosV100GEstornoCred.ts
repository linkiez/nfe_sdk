import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totalização do estorno de crédito
 */
export class CPlNfAg100JDFeTiposBasicosV100GEstornoCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor total do IBS estornado
     */
    public vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS estornada
     */
    public vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GEstornoCred instance.
     * Schema context: Totalização do estorno de crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GEstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
