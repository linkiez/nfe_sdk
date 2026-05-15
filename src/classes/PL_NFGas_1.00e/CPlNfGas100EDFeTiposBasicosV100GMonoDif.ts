import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações do diferimento da Tributação Monofásica
 */
export class CPlNfGas100EDFeTiposBasicosV100GMonoDif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do diferimento do imposto monofásico
     */
    public pDifIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico diferido
     */
    public vIBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Percentual do diferimento do imposto monofásico
     */
    public pDifCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS monofásica diferida
     */
    public vCBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GMonoDif instance.
     * Schema context: Grupo de informações do diferimento da Tributação Monofásica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoDif) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoDif";


        if (props) {

        	this.pDifIBS = props.pDifIBS;
        	this.vIBSMonoDif = props.vIBSMonoDif;
        	this.pDifCBS = props.pDifCBS;
        	this.vCBSMonoDif = props.vCBSMonoDif;
        }
    }
}
