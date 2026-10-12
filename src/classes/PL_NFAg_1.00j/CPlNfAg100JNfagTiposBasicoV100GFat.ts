import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from './CPlNfAg100JNfagTiposBasicoV100EndeEmi';

import { CPlNfAg100JNfagTiposBasicoV100Gpix } from './CPlNfAg100JNfagTiposBasicoV100Gpix';

import { TPlNfAg100JNfagTiposBasicoV100Compet } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Compet';

/**
 * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 Vedado para tpFat 2
 */
export class CPlNfAg100JNfagTiposBasicoV100GFat {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do faturamento (AAAAMM)
     */
    public CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
    /**
     * Data de vencimento da fatura Formato AAAA-MM-DD
     */
    public dVencFat?: unknown;
    /**
     * Data de apresentação da fatura Formato AAAA-MM-DD Não obrigatória, conforme item 2.3.2 da Seção 11.1 do Módulo 11 do PRODIST.
     */
    public dApresFat?: unknown;
    /**
     * Data prevista próxima leitura Formato AAAA-MM-DD
     */
    public dProxLeitura?: unknown;
    /**
     * Endereço de entrega da fatura. Informar se diferente do endereço do destinatário
     */
    public enderCorresp?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
    /**
     * Grupo de informações do PIX
     */
    public gPIX?: CPlNfAg100JNfagTiposBasicoV100Gpix;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GFat instance.
     * Schema context: Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 Vedado para tpFat 2
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GFat) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GFat";


        if (props) {

            assignSchemaProperties(this, props, ["CompetFat", "dVencFat", "dApresFat", "dProxLeitura"]);
        	this.enderCorresp = (props.enderCorresp) ? new CPlNfAg100JNfagTiposBasicoV100EndeEmi(props.enderCorresp): undefined;
        	this.gPIX = (props.gPIX) ? new CPlNfAg100JNfagTiposBasicoV100Gpix(props.gPIX): undefined;
        }
    }
}
