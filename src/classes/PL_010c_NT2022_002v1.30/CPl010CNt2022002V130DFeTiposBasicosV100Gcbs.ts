import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130DFeTiposBasicosV100DevTrib } from './CPl010CNt2022002V130DFeTiposBasicosV100DevTrib';

import { CPl010CNt2022002V130DFeTiposBasicosV100Dif } from './CPl010CNt2022002V130DFeTiposBasicosV100Dif';

import { CPl010CNt2022002V130DFeTiposBasicosV100Red } from './CPl010CNt2022002V130DFeTiposBasicosV100Red';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPl010CNt2022002V130DFeTiposBasicosV100Gcbs.
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Gcbs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Tipo Diferimento
     */
    public gDif?: CPl010CNt2022002V130DFeTiposBasicosV100Dif;
    /**
     * Tipo Devolução Tributo
     */
    public gDevTrib?: CPl010CNt2022002V130DFeTiposBasicosV100DevTrib;
    /**
     * Tipo Redução Base de Cálculo
     */
    public gRed?: CPl010CNt2022002V130DFeTiposBasicosV100Red;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Gcbs instance.
     * Schema context: Runtime class for CPl010CNt2022002V130DFeTiposBasicosV100Gcbs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Gcbs";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vCBS", "vCredPres", "vCredPresCondSus", "pCBS"]);
        	this.gDif = (props.gDif) ? new CPl010CNt2022002V130DFeTiposBasicosV100Dif(props.gDif): undefined;
        	this.gDevTrib = (props.gDevTrib) ? new CPl010CNt2022002V130DFeTiposBasicosV100DevTrib(props.gDevTrib): undefined;
        	this.gRed = (props.gRed) ? new CPl010CNt2022002V130DFeTiposBasicosV100Red(props.gRed): undefined;
        }
    }
}
