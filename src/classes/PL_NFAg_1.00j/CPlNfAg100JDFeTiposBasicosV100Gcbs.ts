import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JDFeTiposBasicosV100DevTrib } from './CPlNfAg100JDFeTiposBasicosV100DevTrib';

import { CPlNfAg100JDFeTiposBasicosV100Dif } from './CPlNfAg100JDFeTiposBasicosV100Dif';

import { CPlNfAg100JDFeTiposBasicosV100Red } from './CPlNfAg100JDFeTiposBasicosV100Red';

import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfAg100JDFeTiposBasicosV100Gcbs.
 */
export class CPlNfAg100JDFeTiposBasicosV100Gcbs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Tipo Diferimento
     */
    public gDif?: CPlNfAg100JDFeTiposBasicosV100Dif;
    /**
     * Tipo Devolução Tributo
     */
    public gDevTrib?: CPlNfAg100JDFeTiposBasicosV100DevTrib;
    /**
     * Tipo Redução Base de Cálculo
     */
    public gRed?: CPlNfAg100JDFeTiposBasicosV100Red;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Gcbs instance.
     * Schema context: Runtime class for CPlNfAg100JDFeTiposBasicosV100Gcbs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Gcbs) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Gcbs";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vCBS", "vCredPres", "vCredPresCondSus", "pCBS"]);
        	this.gDif = (props.gDif) ? new CPlNfAg100JDFeTiposBasicosV100Dif(props.gDif): undefined;
        	this.gDevTrib = (props.gDevTrib) ? new CPlNfAg100JDFeTiposBasicosV100DevTrib(props.gDevTrib): undefined;
        	this.gRed = (props.gRed) ? new CPlNfAg100JDFeTiposBasicosV100Red(props.gRed): undefined;
        }
    }
}
