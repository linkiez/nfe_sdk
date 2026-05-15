import { TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin } from './TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin';

export interface IPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin {
  "@class"?: string;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  dhResp?: unknown;
  GTIN?: unknown;
  tpGTIN?: unknown;
  $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;
}

export class CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin {
    public "@class"?: string;

    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public dhResp?: unknown;
    public GTIN?: unknown;
    public tpGTIN?: unknown;
    public $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;

    public constructor(props?: CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.dhResp = props.dhResp;
        	this.GTIN = props.GTIN;
        	this.tpGTIN = props.tpGTIN;
        	this.$versao = props.$versao;
        }
    }
}
