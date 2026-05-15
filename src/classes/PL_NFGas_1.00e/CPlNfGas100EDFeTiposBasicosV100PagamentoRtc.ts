import { TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc';

import { TPlNfGas100EDFeTiposBasicosV100CnpjRtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100CnpjRtc';

import { TPlNfGas100EDFeTiposBasicosV100MeioPgto } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100MeioPgto';

/**
 * Tipo dados do pagamento para o sistema de arrecadação
 */
export class CPlNfGas100EDFeTiposBasicosV100PagamentoRtc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * (Meio de pagamento utilizado (ver IT DFe 2026.001)
     */
    public tpMeioPgto?: TPlNfGas100EDFeTiposBasicosV100MeioPgto;
    /**
     * CNPJ do recebedor do pagamento Informar zeros não significativos
     */
    public CNPJReceb?: TPlNfGas100EDFeTiposBasicosV100CnpjRtc;
    /**
     * CNPJ base da instituição financeira Informar zeros não significativos
     */
    public CNPJBasePSP?: TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc;
    /**
     * Schema attribute n pag.
     */
    public $nPag?: any;
    /**
     * Schema attribute id transacao.
     */
    public $idTransacao?: any;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100PagamentoRtc instance.
     * Schema context: Tipo dados do pagamento para o sistema de arrecadação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100PagamentoRtc) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100PagamentoRtc";


        if (props) {

        	this.tpMeioPgto = props.tpMeioPgto;
        	this.CNPJReceb = props.CNPJReceb;
        	this.CNPJBasePSP = props.CNPJBasePSP;
        	this.$nPag = props.$nPag;
        	this.$idTransacao = props.$idTransacao;
        }
    }
}
