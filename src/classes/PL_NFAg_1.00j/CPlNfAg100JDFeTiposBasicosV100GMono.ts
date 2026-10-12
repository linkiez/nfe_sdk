import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totais da Monofasia
 */
export class CPlNfAg100JDFeTiposBasicosV100GMono {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor total do IBS monofásico
     */
    public vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS monofásica
     */
    public vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total do IBS monofásico sujeito a retenção
     */
    public vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS monofásica sujeita a retenção
     */
    public vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor do IBS monofásico retido anteriormente
     */
    public vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS monofásica retida anteriormente
     */
    public vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GMono instance.
     * Schema context: Totais da Monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMono) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMono";


        if (props) {

            assignSchemaProperties(this, props, ["vIBSMono", "vCBSMono", "vIBSMonoReten", "vCBSMonoReten", "vIBSMonoRet", "vCBSMonoRet"]);
        }
    }
}
