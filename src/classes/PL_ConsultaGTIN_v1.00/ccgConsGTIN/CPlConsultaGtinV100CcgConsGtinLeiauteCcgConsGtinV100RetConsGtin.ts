import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin } from '../../../types/PL_ConsultaGTIN_v1.00/ccgConsGTIN/TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin';

/**
 * Tipo Retorno da Consulta pública Cadastro Centralizado de GTIN
 */
export class CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão da aplicação da SVRS.
     */
    public verAplic?: unknown;
    /**
     * Código do Status da resposta (resultado do processamento do lote).
     */
    public cStat?: unknown;
    /**
     * Descrição literal do Status da resposta (resultado do processamento do lote).
     */
    public xMotivo?: unknown;
    /**
     * Data e hora da resposta, no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time).
     */
    public dhResp?: unknown;
    /**
     * (idem mensagem de entrada) Código GTIN.
     */
    public GTIN?: unknown;
    /**
     * Tipo do GTIN, quantidade de dígitos (8, 12, 13 ou 14).
     */
    public tpGTIN?: unknown;
    /**
     * Tipo Versão do Leiaute para Consulta Pública GTIN
     */
    public $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;

    /**
     * Creates a new schema-backed CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin instance.
     * Schema context: Tipo Retorno da Consulta pública Cadastro Centralizado de GTIN
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin";


        if (props) {

            assignSchemaProperties(this, props, ["verAplic", "cStat", "xMotivo", "dhResp", "GTIN", "tpGTIN", "$versao"]);
        }
    }
}
