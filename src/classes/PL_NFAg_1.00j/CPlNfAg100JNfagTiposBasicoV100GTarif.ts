import { TPlNfAg100JNfagTiposBasicoV100Faixa } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Faixa';

/**
 * Grupo de Tarifas por Período
 */
export class CPlNfAg100JNfagTiposBasicoV100GTarif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data de início da aplicação da tarifa Data de início da aplicação da tarifa no período considerado para o faturamento ( Formato AAAA-MM-DD)
     */
    public dIniTarif?: unknown;
    /**
     * Data de fim da aplicação da tarifa Data de fim da aplicação da tarifa no período considerado para o faturamento (Formato AAAA-MM-DD)
     */
    public dFimTarif?: unknown;
    /**
     * Tipo de tarifa de aplicação
     */
    public tpFaixaCons?: TPlNfAg100JNfagTiposBasicoV100Faixa;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GTarif instance.
     * Schema context: Grupo de Tarifas por Período
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GTarif) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GTarif";


        if (props) {

        	this.dIniTarif = props.dIniTarif;
        	this.dFimTarif = props.dFimTarif;
        	this.tpFaixaCons = props.tpFaixaCons;
        }
    }
}
