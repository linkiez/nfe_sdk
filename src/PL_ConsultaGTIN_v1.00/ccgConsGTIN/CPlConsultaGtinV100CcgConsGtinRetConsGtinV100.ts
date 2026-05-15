import { TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin } from './TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin';

export interface IPlConsultaGtinV100CcgConsGtinRetConsGtinV100 {
  "@class"?: string;
  retConsGTIN?: TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin;
}

export class CPlConsultaGtinV100CcgConsGtinRetConsGtinV100 {
    public "@class"?: string;

    public retConsGTIN?: TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin;

    public constructor(props?: CPlConsultaGtinV100CcgConsGtinRetConsGtinV100) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinRetConsGtinV100";


        if (props) {

        	this.retConsGTIN = props.retConsGTIN;
        }
    }
}
