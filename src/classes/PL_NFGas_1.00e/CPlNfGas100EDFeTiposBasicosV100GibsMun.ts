import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfGas100EDFeTiposBasicosV100GibsMun.
 */
export class CPlNfGas100EDFeTiposBasicosV100GibsMun {
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
    public vIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GibsMun instance.
     * Schema context: Runtime class for CPlNfGas100EDFeTiposBasicosV100GibsMun.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GibsMun) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GibsMun";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSMun = props.vIBSMun;
        }
    }
}
