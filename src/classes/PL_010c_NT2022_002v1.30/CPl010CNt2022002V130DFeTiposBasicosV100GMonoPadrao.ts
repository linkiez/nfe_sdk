import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica padrão
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada na monofasia
     */
    public qBCMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS
     */
    public adRemIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Alíquota ad rem da CBS
     */
    public adRemCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico
     */
    public vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS monofásica
     */
    public vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao instance.
     * Schema context: Grupo de informações da Tributação Monofásica padrão
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao";


        if (props) {

            assignSchemaProperties(this, props, ["qBCMono", "adRemIBS", "adRemCBS", "vIBSMono", "vCBSMono"]);
        }
    }
}
