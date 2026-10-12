import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Tipo Tributação Regular
 */
export class CPlNfAg100JDFeTiposBasicosV100TribRegular {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código da Situação Tributária do IBS e CBS Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva
     */
    public CSTReg?: TPlNfAg100JDFeTiposBasicosV100Cst;
    /**
     * Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva
     */
    public cClassTribReg?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
    /**
     * Alíquota do IBS da UF Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS da UF Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota do IBS do Município Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS do Município Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota da CBS Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100TribRegular instance.
     * Schema context: Tipo Tributação Regular
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribRegular) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribRegular";


        if (props) {

            assignSchemaProperties(this, props, ["CSTReg", "cClassTribReg", "pAliqEfetRegIBSUF", "vTribRegIBSUF", "pAliqEfetRegIBSMun", "vTribRegIBSMun", "pAliqEfetRegCBS", "vTribRegCBS"]);
        }
    }
}
