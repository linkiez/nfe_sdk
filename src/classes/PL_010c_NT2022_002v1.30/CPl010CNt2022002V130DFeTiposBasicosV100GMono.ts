import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Totais da Monofasia
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GMono {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor total do IBS monofásico
     */
    public vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS monofásica
     */
    public vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total do IBS monofásico sujeito a retenção
     */
    public vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS monofásica sujeita a retenção
     */
    public vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor do IBS monofásico retido anteriormente
     */
    public vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS monofásica retida anteriormente
     */
    public vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GMono instance.
     * Schema context: Totais da Monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMono) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMono";


        if (props) {

        	this.vIBSMono = props.vIBSMono;
        	this.vCBSMono = props.vCBSMono;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
