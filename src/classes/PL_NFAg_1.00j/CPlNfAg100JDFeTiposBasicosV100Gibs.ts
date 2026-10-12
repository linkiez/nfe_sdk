import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JDFeTiposBasicosV100GibsMun } from './CPlNfAg100JDFeTiposBasicosV100GibsMun';

import { CPlNfAg100JDFeTiposBasicosV100Gibsuf } from './CPlNfAg100JDFeTiposBasicosV100Gibsuf';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfAg100JDFeTiposBasicosV100Gibs.
 */
export class CPlNfAg100JDFeTiposBasicosV100Gibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property g IBSUF.
     */
    public gIBSUF?: CPlNfAg100JDFeTiposBasicosV100Gibsuf;
    /**
     * Schema property g IBSMun.
     */
    public gIBSMun?: CPlNfAg100JDFeTiposBasicosV100GibsMun;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Gibs instance.
     * Schema context: Runtime class for CPlNfAg100JDFeTiposBasicosV100Gibs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Gibs) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Gibs";


        if (props) {

        	this.gIBSUF = (props.gIBSUF) ? new CPlNfAg100JDFeTiposBasicosV100Gibsuf(props.gIBSUF): undefined;
        	this.gIBSMun = (props.gIBSMun) ? new CPlNfAg100JDFeTiposBasicosV100GibsMun(props.gIBSMun): undefined;
            assignSchemaProperties(this, props, ["vIBS", "vCredPres", "vCredPresCondSus"]);
        }
    }
}
