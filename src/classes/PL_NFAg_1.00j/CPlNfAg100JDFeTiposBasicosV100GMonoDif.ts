import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações do diferimento da Tributação Monofásica
 */
export class CPlNfAg100JDFeTiposBasicosV100GMonoDif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do diferimento do imposto monofásico
     */
    public pDifIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico diferido
     */
    public vIBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Percentual do diferimento do imposto monofásico
     */
    public pDifCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS monofásica diferida
     */
    public vCBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GMonoDif instance.
     * Schema context: Grupo de informações do diferimento da Tributação Monofásica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoDif) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoDif";


        if (props) {

        	this.pDifIBS = props.pDifIBS;
        	this.vIBSMonoDif = props.vIBSMonoDif;
        	this.pDifCBS = props.pDifCBS;
        	this.vCBSMonoDif = props.vCBSMonoDif;
        }
    }
}
