import { TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc';

import { TPlNfAg100JDFeTiposBasicosV100CnpjRtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CnpjRtc';

import { TPlNfAg100JDFeTiposBasicosV100MeioPgto } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100MeioPgto';

/**
 * Tipo dados do pagamento para o sistema de arrecadação
 */
export class CPlNfAg100JDFeTiposBasicosV100PagamentoRtc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * (Meio de pagamento utilizado (ver IT DFe 2026.001)
     */
    public tpMeioPgto?: TPlNfAg100JDFeTiposBasicosV100MeioPgto;
    /**
     * CNPJ do recebedor do pagamento Informar zeros não significativos
     */
    public CNPJReceb?: TPlNfAg100JDFeTiposBasicosV100CnpjRtc;
    /**
     * CNPJ base da instituição financeira Informar zeros não significativos
     */
    public CNPJBasePSP?: TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc;
    /**
     * Schema attribute n pag.
     */
    public $nPag?: any;
    /**
     * Schema attribute id transacao.
     */
    public $idTransacao?: any;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100PagamentoRtc instance.
     * Schema context: Tipo dados do pagamento para o sistema de arrecadação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100PagamentoRtc) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100PagamentoRtc";


        if (props) {

        	this.tpMeioPgto = props.tpMeioPgto;
        	this.CNPJReceb = props.CNPJReceb;
        	this.CNPJBasePSP = props.CNPJBasePSP;
        	this.$nPag = props.$nPag;
        	this.$idTransacao = props.$idTransacao;
        }
    }
}
