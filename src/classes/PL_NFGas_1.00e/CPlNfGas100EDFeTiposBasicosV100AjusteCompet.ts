import { TPlNfGas100EDFeTiposBasicosV100CompetApur } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100CompetApur';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Ajuste de Competência
 */
export class CPlNfGas100EDFeTiposBasicosV100AjusteCompet {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do período de apuração (AAAA-MM)
     */
    public competApur?: TPlNfGas100EDFeTiposBasicosV100CompetApur;
    /**
     * Valor do IBS
     */
    public vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS
     */
    public vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100AjusteCompet instance.
     * Schema context: Tipo Ajuste de Competência
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100AjusteCompet) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100AjusteCompet";


        if (props) {

        	this.competApur = props.competApur;
        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
