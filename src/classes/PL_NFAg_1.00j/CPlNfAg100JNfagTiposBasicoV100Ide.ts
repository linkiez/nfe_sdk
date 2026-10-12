import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JNfagTiposBasicoV100FatNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100FatNfAg';

import { TPlNfAg100JNfagTiposBasicoV100FinNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100FinNfAg';

import { TPlNfAg100JNfagTiposBasicoV100TtpEmis } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100TtpEmis';

/**
 * Identificação da NFAg
 */
export class CPlNfAg100JNfagTiposBasicoV100Ide {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código da UF do emitente da NFAg Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE de código de unidades da federação.
     */
    public cUF?: unknown;
    /**
     * Tipo do Ambiente 1 - Produção; 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Modelo da NFAg Utilizar o código 75 para identificação da NFag
     */
    public mod?: unknown;
    /**
     * Série do documento fiscal Informar a série do documento fiscal (informar zero para série única).
     */
    public serie?: unknown;
    /**
     * Número do documento fiscal Número que identifica o documento fiscal 1 a 999999999.
     */
    public nNF?: unknown;
    /**
     * Data e hora de emissão do documento fiscal Formato AAAA-MM-DDTHH:MM:DD TZD
     */
    public dhEmi?: unknown;
    /**
     * Forma de emissão do Documento Fiscal 1 - Normal ; 2 - Contingência Off Line
     */
    public tpEmis?: TPlNfAg100JNfagTiposBasicoV100TtpEmis;
    /**
     * Código do município de ocorrência do fato gerador
     */
    public cMunFG?: unknown;
    /**
     * Finalidade de emissão da NFAg 0 - NFAg normal; 3 - NFAg substituição;
     */
    public finNFAg?: TPlNfAg100JNfagTiposBasicoV100FinNfAg;
    /**
     * Tipo de Faturamento da NFAg 1 - Faturamento Normal; 2 - Faturamento por terceiro; 3 - Faturamento conjunto 1- Faturamento Normal; 2 - Faturamento por terceiro; 3 - Faturamento conjunto
     */
    public tpFat?: TPlNfAg100JNfagTiposBasicoV100FatNfAg;
    /**
     * Grupo de Compras Governamentais
     */
    public gCompraGov?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Ide instance.
     * Schema context: Identificação da NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Ide) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Ide";


        if (props) {

            assignSchemaProperties(this, props, ["cUF", "tpAmb", "mod", "serie", "nNF", "dhEmi", "tpEmis", "cMunFG", "finNFAg", "tpFat", "gCompraGov"]);
        }
    }
}
