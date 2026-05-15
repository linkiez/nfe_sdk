import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Tributação Compra Governamental
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pAliqCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025
     */
    public vTribCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov instance.
     * Schema context: Tipo Tributação Compra Governamental
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov";


        if (props) {

        	this.pAliqIBSUF = props.pAliqIBSUF;
        	this.vTribIBSUF = props.vTribIBSUF;
        	this.pAliqIBSMun = props.pAliqIBSMun;
        	this.vTribIBSMun = props.vTribIBSMun;
        	this.pAliqCBS = props.pAliqCBS;
        	this.vTribCBS = props.vTribCBS;
        }
    }
}
