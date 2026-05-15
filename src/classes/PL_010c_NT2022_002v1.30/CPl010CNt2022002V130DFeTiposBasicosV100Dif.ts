import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Diferimento
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Dif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do diferimento
     */
    public pDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do diferimento
     */
    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Dif instance.
     * Schema context: Tipo Diferimento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Dif) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Dif";


        if (props) {

        	this.pDif = props.pDif;
        	this.vDif = props.vDif;
        }
    }
}
