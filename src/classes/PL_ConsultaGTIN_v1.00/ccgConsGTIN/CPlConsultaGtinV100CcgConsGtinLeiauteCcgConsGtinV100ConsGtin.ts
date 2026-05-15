import { TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin } from '../../../types/PL_ConsultaGTIN_v1.00/ccgConsGTIN/TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin';

/**
 * Tipo Consulta pública Cadastro Centralizado de GTIN
 */
export class CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar o código GTIN a ser consultado.
     */
    public GTIN?: unknown;
    /**
     * Tipo Versão do Leiaute para Consulta Pública GTIN
     */
    public $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;

    /**
     * Creates a new schema-backed CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin instance.
     * Schema context: Tipo Consulta pública Cadastro Centralizado de GTIN
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin";


        if (props) {

        	this.GTIN = props.GTIN;
        	this.$versao = props.$versao;
        }
    }
}
