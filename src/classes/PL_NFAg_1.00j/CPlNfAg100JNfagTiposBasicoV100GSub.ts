import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JNfagTiposBasicoV100MotSubAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100MotSubAg';

/**
 * Grupo de informações da substituição
 */
export class CPlNfAg100JNfagTiposBasicoV100GSub {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Chave de acesso da NFAg referenciada
     */
    public chNFAg?: unknown;
    /**
     * Motivo da substituição 01 – Erro de Leitura 02 – Erro de Preço ou Erro de Tarifa; 03 – Decisão Judicial 04 – Erro Cadastral; 05 - Erro de Tributação 06 - Decisão da Reguladora; 07 - Acúmulo de Consumo; 08 - Correção de Vazamento Interno 09 - Alteração de vencimento
     */
    public motSub?: TPlNfAg100JNfagTiposBasicoV100MotSubAg;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GSub instance.
     * Schema context: Grupo de informações da substituição
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GSub) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GSub";


        if (props) {

            assignSchemaProperties(this, props, ["chNFAg", "motSub"]);
        }
    }
}
