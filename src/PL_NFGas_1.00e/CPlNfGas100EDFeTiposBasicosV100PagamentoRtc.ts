import { TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc } from './TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc';

import { TPlNfGas100EDFeTiposBasicosV100CnpjRtc } from './TPlNfGas100EDFeTiposBasicosV100CnpjRtc';

import { TPlNfGas100EDFeTiposBasicosV100MeioPgto } from './TPlNfGas100EDFeTiposBasicosV100MeioPgto';

export interface IPlNfGas100EDFeTiposBasicosV100PagamentoRtc {
  "@class"?: string;
  tpMeioPgto?: TPlNfGas100EDFeTiposBasicosV100MeioPgto;
  CNPJReceb?: TPlNfGas100EDFeTiposBasicosV100CnpjRtc;
  CNPJBasePSP?: TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc;
  $nPag?: any;
  $idTransacao?: any;
}

export class CPlNfGas100EDFeTiposBasicosV100PagamentoRtc {
    public "@class"?: string;

    public tpMeioPgto?: TPlNfGas100EDFeTiposBasicosV100MeioPgto;
    public CNPJReceb?: TPlNfGas100EDFeTiposBasicosV100CnpjRtc;
    public CNPJBasePSP?: TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc;
    public $nPag?: any;
    public $idTransacao?: any;

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
