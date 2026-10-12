import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Tributação Compra Governamental
 */
export class CPlNfGas100EDFeTiposBasicosV100TribCompraGov {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100TribCompraGov instance.
     * Schema context: Tipo Tributação Compra Governamental
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribCompraGov) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribCompraGov";


        if (props) {

            assignSchemaProperties(this, props, ["pAliqIBSUF", "vTribIBSUF", "pAliqIBSMun", "vTribIBSMun", "pAliqCBS", "vTribCBS"]);
        }
    }
}
