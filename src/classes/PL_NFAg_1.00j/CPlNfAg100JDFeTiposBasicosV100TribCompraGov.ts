import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Tributação Compra Governamental
 */
export class CPlNfAg100JDFeTiposBasicosV100TribCompraGov {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100TribCompraGov instance.
     * Schema context: Tipo Tributação Compra Governamental
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribCompraGov) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribCompraGov";


        if (props) {

            assignSchemaProperties(this, props, ["pAliqIBSUF", "vTribIBSUF", "pAliqIBSMun", "vTribIBSMun", "pAliqCBS", "vTribCBS"]);
        }
    }
}
