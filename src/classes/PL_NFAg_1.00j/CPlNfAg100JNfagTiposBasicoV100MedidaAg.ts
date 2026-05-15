import { TPlNfAg100JNfagTiposBasicoV100UMedItemAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100UMedItemAg';

/**
 * Tipo de dados de medida
 */
export class CPlNfAg100JNfagTiposBasicoV100MedidaAg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Volume por unidade de consumo em m3
     */
    public vUnidConsumo?: unknown;
    /**
     * Unidade Básica de Medida 1 - m3; 2 - Litros; 5 - Unidade 6 - ton
     */
    public uMed?: TPlNfAg100JNfagTiposBasicoV100UMedItemAg;
    /**
     * Valor da medição (leitura) anterior
     */
    public vMedAnt?: unknown;
    /**
     * Valor da medição (leitura) atual
     */
    public vMedAtu?: unknown;
    /**
     * Indicar o fator de multiplicação do medidor
     */
    public vConst?: unknown;
    /**
     * Valor da medição (vMedAtu – vMedAnt) * vConst
     */
    public vMed?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100MedidaAg instance.
     * Schema context: Tipo de dados de medida
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100MedidaAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100MedidaAg";


        if (props) {

        	this.vUnidConsumo = props.vUnidConsumo;
        	this.uMed = props.uMed;
        	this.vMedAnt = props.vMedAnt;
        	this.vMedAtu = props.vMedAtu;
        	this.vConst = props.vConst;
        	this.vMed = props.vMed;
        }
    }
}
