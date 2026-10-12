import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Estorno de Crédito
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS a ser estornado
     */
    public vIBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS a ser estornada
     */
    public vCBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred instance.
     * Schema context: Tipo Estorno de Crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred";


        if (props) {

            assignSchemaProperties(this, props, ["vIBSEstCred", "vCBSEstCred"]);
        }
    }
}
