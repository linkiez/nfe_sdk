import { TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin } from './TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin';

export interface IPlConsultaGtinV100CcgConsGtinConsGtinV100 {
  "@class"?: string;
  consGTIN?: TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin;
}

export class CPlConsultaGtinV100CcgConsGtinConsGtinV100 {
    public "@class"?: string;

    public consGTIN?: TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin;

    public constructor(props?: CPlConsultaGtinV100CcgConsGtinConsGtinV100) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinConsGtinV100";


        if (props) {

        	this.consGTIN = props.consGTIN;
        }
    }
}
