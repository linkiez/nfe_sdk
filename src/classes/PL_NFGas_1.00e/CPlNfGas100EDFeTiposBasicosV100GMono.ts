import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totais da Monofasia
 */
export class CPlNfGas100EDFeTiposBasicosV100GMono {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor total do IBS monofásico
     */
    public vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS monofásica
     */
    public vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total do IBS monofásico sujeito a retenção
     */
    public vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS monofásica sujeita a retenção
     */
    public vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor do IBS monofásico retido anteriormente
     */
    public vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS monofásica retida anteriormente
     */
    public vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GMono instance.
     * Schema context: Totais da Monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMono) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMono";


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
