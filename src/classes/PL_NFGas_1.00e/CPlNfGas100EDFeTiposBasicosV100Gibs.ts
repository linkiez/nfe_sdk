import { CPlNfGas100EDFeTiposBasicosV100GibsMun } from './CPlNfGas100EDFeTiposBasicosV100GibsMun';

import { CPlNfGas100EDFeTiposBasicosV100Gibsuf } from './CPlNfGas100EDFeTiposBasicosV100Gibsuf';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfGas100EDFeTiposBasicosV100Gibs.
 */
export class CPlNfGas100EDFeTiposBasicosV100Gibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property g IBSUF.
     */
    public gIBSUF?: CPlNfGas100EDFeTiposBasicosV100Gibsuf;
    /**
     * Schema property g IBSMun.
     */
    public gIBSMun?: CPlNfGas100EDFeTiposBasicosV100GibsMun;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Gibs instance.
     * Schema context: Runtime class for CPlNfGas100EDFeTiposBasicosV100Gibs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Gibs) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Gibs";


        if (props) {

        	this.gIBSUF = (props.gIBSUF) ? new CPlNfGas100EDFeTiposBasicosV100Gibsuf(props.gIBSUF): undefined;
        	this.gIBSMun = (props.gIBSMun) ? new CPlNfGas100EDFeTiposBasicosV100GibsMun(props.gIBSMun): undefined;
        	this.vIBS = props.vIBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        }
    }
}
