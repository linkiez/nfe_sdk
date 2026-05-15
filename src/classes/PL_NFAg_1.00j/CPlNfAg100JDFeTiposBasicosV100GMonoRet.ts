import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica retida anteriormente
 */
export class CPlNfAg100JDFeTiposBasicosV100GMonoRet {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada retida anteriormente
     */
    public qBCMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS retido anteriormente
     */
    public adRemIBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS retido anteriormente
     */
    public vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota ad rem da CBS retida anteriormente
     */
    public adRemCBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS retida anteriormente
     */
    public vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GMonoRet instance.
     * Schema context: Grupo de informações da Tributação Monofásica retida anteriormente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoRet) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoRet";


        if (props) {

        	this.qBCMonoRet = props.qBCMonoRet;
        	this.adRemIBSRet = props.adRemIBSRet;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.adRemCBSRet = props.adRemCBSRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
