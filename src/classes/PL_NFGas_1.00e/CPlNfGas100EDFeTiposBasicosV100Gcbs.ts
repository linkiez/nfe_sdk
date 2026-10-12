import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100EDFeTiposBasicosV100DevTrib } from './CPlNfGas100EDFeTiposBasicosV100DevTrib';

import { CPlNfGas100EDFeTiposBasicosV100Dif } from './CPlNfGas100EDFeTiposBasicosV100Dif';

import { CPlNfGas100EDFeTiposBasicosV100Red } from './CPlNfGas100EDFeTiposBasicosV100Red';

import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfGas100EDFeTiposBasicosV100Gcbs.
 */
export class CPlNfGas100EDFeTiposBasicosV100Gcbs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
     */
    public pCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Tipo Diferimento
     */
    public gDif?: CPlNfGas100EDFeTiposBasicosV100Dif;
    /**
     * Tipo Devolução Tributo
     */
    public gDevTrib?: CPlNfGas100EDFeTiposBasicosV100DevTrib;
    /**
     * Tipo Redução Base de Cálculo
     */
    public gRed?: CPlNfGas100EDFeTiposBasicosV100Red;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Gcbs instance.
     * Schema context: Runtime class for CPlNfGas100EDFeTiposBasicosV100Gcbs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Gcbs) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Gcbs";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vCBS", "vCredPres", "vCredPresCondSus", "pCBS"]);
        	this.gDif = (props.gDif) ? new CPlNfGas100EDFeTiposBasicosV100Dif(props.gDif): undefined;
        	this.gDevTrib = (props.gDevTrib) ? new CPlNfGas100EDFeTiposBasicosV100DevTrib(props.gDevTrib): undefined;
        	this.gRed = (props.gRed) ? new CPlNfGas100EDFeTiposBasicosV100Red(props.gRed): undefined;
        }
    }
}
