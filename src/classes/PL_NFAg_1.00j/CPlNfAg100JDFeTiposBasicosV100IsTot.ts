import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais do Imposto Seletivo
 */
export class CPlNfAg100JDFeTiposBasicosV100IsTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Total do Imposto Seletivo
     */
    public vIS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100IsTot instance.
     * Schema context: Grupo de informações de totais do Imposto Seletivo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100IsTot) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100IsTot";


        if (props) {

            assignSchemaProperties(this, props, ["vIS"]);
        }
    }
}
