import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JNfagTiposBasicoV100GMedicao } from './CPlNfAg100JNfagTiposBasicoV100GMedicao';

import { TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg';

/**
 * Dados do Produto ou Serviço
 */
export class CPlNfAg100JNfagTiposBasicoV100Prod {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Indicador da origem da quantidade faturada 1 - Media; 2 - Medido; 3 - Contratada; 4 - Calculada ou estimado; 5 - Residual Calculado; 6 - Sem quantidade 7 - Por Faixa;
     */
    public indOrigemQtd?: TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg;
    /**
     * Grupo para referenciar qual medição e medida estão relacionadas ao item
     */
    public gMedicao?: CPlNfAg100JNfagTiposBasicoV100GMedicao;
    /**
     * Quantidade Faturada Informar a quantidade de comercialização do produto .
     */
    public qFaturada?: unknown;
    /**
     * Valor unitário do item O valor unitário do item no caso de energia elétrica corresponde ao valor da tarifa e dos tributos que devam compor a base de cálculo. O item pode estar acrescido do adicional da bandeira tarifária ou o adicional de bandeira poderá ser lançado como um item específico. Este campo também corresponde ao preço médio efetivo relativo ao consumo ativo do período, quando aplicáveis os termos do inciso I da clausula primeira do Convênio ICMS 77/11 (DEVEC).
     */
    public vItem?: unknown;
    /**
     * Fator de poluição Se informado multipla ao valor do vItem Obrigatoriamente > 1.
     */
    public fatorPoluicao?: unknown;
    /**
     * Valor total do item
     */
    public vProd?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Prod instance.
     * Schema context: Dados do Produto ou Serviço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Prod) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Prod";


        if (props) {

            assignSchemaProperties(this, props, ["indOrigemQtd"]);
        	this.gMedicao = (props.gMedicao) ? new CPlNfAg100JNfagTiposBasicoV100GMedicao(props.gMedicao): undefined;
            assignSchemaProperties(this, props, ["qFaturada", "vItem", "fatorPoluicao", "vProd"]);
        }
    }
}
