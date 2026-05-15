import { TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin } from './TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin';

export interface IPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin {
  "@class"?: string;
  GTIN?: unknown;
  $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;
}

export class CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin {
    public "@class"?: string;

    public GTIN?: unknown;
    public $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;

    public constructor(props?: CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin";


        if (props) {

        	this.GTIN = props.GTIN;
        	this.$versao = props.$versao;
        }
    }
}
