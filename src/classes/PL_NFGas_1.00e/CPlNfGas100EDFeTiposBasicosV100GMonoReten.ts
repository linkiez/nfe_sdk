import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica sujeita a retenção
 */
export class CPlNfGas100EDFeTiposBasicosV100GMonoReten {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada sujeita a retenção.
     */
    public qBCMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS sujeito a retenção
     */
    public adRemIBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico sujeito a retenção
     */
    public vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota ad rem da CBS sujeita a retenção
     */
    public adRemCBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS monofásica sujeita a retenção
     */
    public vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GMonoReten instance.
     * Schema context: Grupo de informações da Tributação Monofásica sujeita a retenção
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoReten) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoReten";


        if (props) {

        	this.qBCMonoReten = props.qBCMonoReten;
        	this.adRemIBSReten = props.adRemIBSReten;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.adRemCBSReten = props.adRemCBSReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        }
    }
}
