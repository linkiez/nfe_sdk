import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Tipo Tributação Regular
 */
export class CPlNfGas100EDFeTiposBasicosV100TribRegular {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código da Situação Tributária do IBS e CBS Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva
     */
    public CSTReg?: TPlNfGas100EDFeTiposBasicosV100Cst;
    /**
     * Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva
     */
    public cClassTribReg?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
    /**
     * Alíquota do IBS da UF Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS da UF Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota do IBS do Município Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS do Município Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota da CBS Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100TribRegular instance.
     * Schema context: Tipo Tributação Regular
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribRegular) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribRegular";


        if (props) {

            assignSchemaProperties(this, props, ["CSTReg", "cClassTribReg", "pAliqEfetRegIBSUF", "vTribRegIBSUF", "pAliqEfetRegIBSMun", "vTribRegIBSMun", "pAliqEfetRegCBS", "vTribRegCBS"]);
        }
    }
}
