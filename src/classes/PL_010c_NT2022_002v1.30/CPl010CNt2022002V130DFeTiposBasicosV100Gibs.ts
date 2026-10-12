import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130DFeTiposBasicosV100GibsMun } from './CPl010CNt2022002V130DFeTiposBasicosV100GibsMun';

import { CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf } from './CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPl010CNt2022002V130DFeTiposBasicosV100Gibs.
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Gibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property g IBSUF.
     */
    public gIBSUF?: CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf;
    /**
     * Schema property g IBSMun.
     */
    public gIBSMun?: CPl010CNt2022002V130DFeTiposBasicosV100GibsMun;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Gibs instance.
     * Schema context: Runtime class for CPl010CNt2022002V130DFeTiposBasicosV100Gibs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Gibs) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Gibs";


        if (props) {

        	this.gIBSUF = (props.gIBSUF) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf(props.gIBSUF): undefined;
        	this.gIBSMun = (props.gIBSMun) ? new CPl010CNt2022002V130DFeTiposBasicosV100GibsMun(props.gIBSMun): undefined;
            assignSchemaProperties(this, props, ["vIBS", "vCredPres", "vCredPresCondSus"]);
        }
    }
}
