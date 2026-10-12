import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Estorno de Crédito
 */
export class CPlNfAg100JDFeTiposBasicosV100EstornoCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS a ser estornado
     */
    public vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS a ser estornada
     */
    public vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100EstornoCred instance.
     * Schema context: Tipo Estorno de Crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100EstornoCred) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100EstornoCred";


        if (props) {

            assignSchemaProperties(this, props, ["vIBSEstCred", "vCBSEstCred"]);
        }
    }
}
