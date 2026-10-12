import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica retida anteriormente
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada retida anteriormente
     */
    public qBCMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS retido anteriormente
     */
    public adRemIBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS retido anteriormente
     */
    public vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota ad rem da CBS retida anteriormente
     */
    public adRemCBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS retida anteriormente
     */
    public vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet instance.
     * Schema context: Grupo de informações da Tributação Monofásica retida anteriormente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet";


        if (props) {

            assignSchemaProperties(this, props, ["qBCMonoRet", "adRemIBSRet", "vIBSMonoRet", "adRemCBSRet", "vCBSMonoRet"]);
        }
    }
}
