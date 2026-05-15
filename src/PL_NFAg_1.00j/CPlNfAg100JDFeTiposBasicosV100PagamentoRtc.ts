import { TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc } from './TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc';

import { TPlNfAg100JDFeTiposBasicosV100CnpjRtc } from './TPlNfAg100JDFeTiposBasicosV100CnpjRtc';

import { TPlNfAg100JDFeTiposBasicosV100MeioPgto } from './TPlNfAg100JDFeTiposBasicosV100MeioPgto';

export interface IPlNfAg100JDFeTiposBasicosV100PagamentoRtc {
  "@class"?: string;
  tpMeioPgto?: TPlNfAg100JDFeTiposBasicosV100MeioPgto;
  CNPJReceb?: TPlNfAg100JDFeTiposBasicosV100CnpjRtc;
  CNPJBasePSP?: TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc;
  $nPag?: any;
  $idTransacao?: any;
}

export class CPlNfAg100JDFeTiposBasicosV100PagamentoRtc {
    public "@class"?: string;

    public tpMeioPgto?: TPlNfAg100JDFeTiposBasicosV100MeioPgto;
    public CNPJReceb?: TPlNfAg100JDFeTiposBasicosV100CnpjRtc;
    public CNPJBasePSP?: TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc;
    public $nPag?: any;
    public $idTransacao?: any;

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
