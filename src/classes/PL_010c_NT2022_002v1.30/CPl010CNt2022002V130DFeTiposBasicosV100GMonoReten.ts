import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica sujeita a retenção
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada sujeita a retenção.
     */
    public qBCMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS sujeito a retenção
     */
    public adRemIBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico sujeito a retenção
     */
    public vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota ad rem da CBS sujeita a retenção
     */
    public adRemCBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS monofásica sujeita a retenção
     */
    public vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten instance.
     * Schema context: Grupo de informações da Tributação Monofásica sujeita a retenção
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten";


        if (props) {

        	this.qBCMonoReten = props.qBCMonoReten;
        	this.adRemIBSReten = props.adRemIBSReten;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.adRemCBSReten = props.adRemCBSReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        }
    }
}
