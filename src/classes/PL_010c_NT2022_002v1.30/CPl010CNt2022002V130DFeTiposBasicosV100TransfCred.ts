import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Transferência de Crédito
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100TransfCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS a ser transferido
     */
    public vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS a ser transferida
     */
    public vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100TransfCred instance.
     * Schema context: Tipo Transferência de Crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TransfCred) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TransfCred";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        }
    }
}
