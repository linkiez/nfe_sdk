import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Tipo Tributação Regular
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100TribRegular {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código da Situação Tributária do IBS e CBS Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva
     */
    public CSTReg?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    /**
     * Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva
     */
    public cClassTribReg?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
    /**
     * Alíquota do IBS da UF Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS da UF Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota do IBS do Município Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS do Município Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota da CBS Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
     */
    public pAliqEfetRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
     */
    public vTribRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100TribRegular instance.
     * Schema context: Tipo Tributação Regular
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribRegular) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribRegular";


        if (props) {

            assignSchemaProperties(this, props, ["CSTReg", "cClassTribReg", "pAliqEfetRegIBSUF", "vTribRegIBSUF", "pAliqEfetRegIBSMun", "vTribRegIBSMun", "pAliqEfetRegCBS", "vTribRegCBS"]);
        }
    }
}
