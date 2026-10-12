import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica padrão
 */
export class CPlNfAg100JDFeTiposBasicosV100GMonoPadrao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada na monofasia
     */
    public qBCMono?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS
     */
    public adRemIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Alíquota ad rem da CBS
     */
    public adRemCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico
     */
    public vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS monofásica
     */
    public vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GMonoPadrao instance.
     * Schema context: Grupo de informações da Tributação Monofásica padrão
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoPadrao) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoPadrao";


        if (props) {

            assignSchemaProperties(this, props, ["qBCMono", "adRemIBS", "adRemCBS", "vIBSMono", "vCBSMono"]);
        }
    }
}
