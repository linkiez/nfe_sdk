import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Transferência de Crédito
 */
export class CPlNfGas100EDFeTiposBasicosV100TransfCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS a ser transferido
     */
    public vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS a ser transferida
     */
    public vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100TransfCred instance.
     * Schema context: Tipo Transferência de Crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TransfCred) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TransfCred";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        }
    }
}
