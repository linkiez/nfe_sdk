import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Transferência de Crédito
 */
export class CPlNfAg100JDFeTiposBasicosV100TransfCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS a ser transferido
     */
    public vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS a ser transferida
     */
    public vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100TransfCred instance.
     * Schema context: Tipo Transferência de Crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TransfCred) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TransfCred";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        }
    }
}
