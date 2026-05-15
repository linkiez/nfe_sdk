import { TPlNfAg100JNfagTiposBasicoV100Compet } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Compet';

import { TPlNfAg100JNfagTiposBasicoV100UMedAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100UMedAg';

/**
 * Consumo
 */
export class CPlNfAg100JNfagTiposBasicoV100GCons {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do faturamento (AAAAMM)
     */
    public CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
    /**
     * Unidade Básica de Medida 1 - m3 e 2 - litro
     */
    public uMed?: TPlNfAg100JNfagTiposBasicoV100UMedAg;
    /**
     * Média Diária de consumo
     */
    public medDiaria?: unknown;
    /**
     * Consumo no mês
     */
    public consumo?: unknown;
    /**
     * Volume Faturado
     */
    public volFat?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GCons instance.
     * Schema context: Consumo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GCons) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GCons";


        if (props) {

        	this.CompetFat = props.CompetFat;
        	this.uMed = props.uMed;
        	this.medDiaria = props.medDiaria;
        	this.consumo = props.consumo;
        	this.volFat = props.volFat;
        }
    }
}
