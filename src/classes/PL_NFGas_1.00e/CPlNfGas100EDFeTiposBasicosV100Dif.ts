import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Diferimento
 */
export class CPlNfGas100EDFeTiposBasicosV100Dif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do diferimento
     */
    public pDif?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do diferimento
     */
    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Dif instance.
     * Schema context: Tipo Diferimento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Dif) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Dif";


        if (props) {

        	this.pDif = props.pDif;
        	this.vDif = props.vDif;
        }
    }
}
