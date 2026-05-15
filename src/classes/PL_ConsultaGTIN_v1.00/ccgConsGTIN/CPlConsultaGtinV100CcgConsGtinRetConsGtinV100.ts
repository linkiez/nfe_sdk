import { TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin } from '../../../types/PL_ConsultaGTIN_v1.00/ccgConsGTIN/TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin';

/**
 * Runtime class for CPlConsultaGtinV100CcgConsGtinRetConsGtinV100.
 */
export class CPlConsultaGtinV100CcgConsGtinRetConsGtinV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Cons GTIN.
     */
    public retConsGTIN?: TPlConsultaGtinV100CcgConsGtinRetConsGtinV100RetConsGtin;

    /**
     * Creates a new schema-backed CPlConsultaGtinV100CcgConsGtinRetConsGtinV100 instance.
     * Schema context: Runtime class for CPlConsultaGtinV100CcgConsGtinRetConsGtinV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlConsultaGtinV100CcgConsGtinRetConsGtinV100) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinRetConsGtinV100";


        if (props) {

        	this.retConsGTIN = props.retConsGTIN;
        }
    }
}
