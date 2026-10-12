import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica sujeita a retenção
 */
export class CPlNfAg100JDFeTiposBasicosV100GMonoReten {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada sujeita a retenção.
     */
    public qBCMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS sujeito a retenção
     */
    public adRemIBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico sujeito a retenção
     */
    public vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota ad rem da CBS sujeita a retenção
     */
    public adRemCBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS monofásica sujeita a retenção
     */
    public vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GMonoReten instance.
     * Schema context: Grupo de informações da Tributação Monofásica sujeita a retenção
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoReten) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoReten";


        if (props) {

            assignSchemaProperties(this, props, ["qBCMonoReten", "adRemIBSReten", "vIBSMonoReten", "adRemCBSReten", "vCBSMonoReten"]);
        }
    }
}
