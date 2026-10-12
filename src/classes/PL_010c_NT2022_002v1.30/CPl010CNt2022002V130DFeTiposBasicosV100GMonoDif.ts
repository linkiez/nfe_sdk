import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações do diferimento da Tributação Monofásica
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do diferimento do imposto monofásico
     */
    public pDifIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico diferido
     */
    public vIBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Percentual do diferimento do imposto monofásico
     */
    public pDifCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS monofásica diferida
     */
    public vCBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif instance.
     * Schema context: Grupo de informações do diferimento da Tributação Monofásica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif";


        if (props) {

            assignSchemaProperties(this, props, ["pDifIBS", "vIBSMonoDif", "pDifCBS", "vCBSMonoDif"]);
        }
    }
}
