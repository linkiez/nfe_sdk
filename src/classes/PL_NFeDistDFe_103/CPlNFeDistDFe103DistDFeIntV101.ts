import { CPlNFeDistDFe103DistDFeIntV101DistDFeInt } from './CPlNFeDistDFe103DistDFeIntV101DistDFeInt';

/**
 * Runtime class for CPlNFeDistDFe103DistDFeIntV101.
 */
export class CPlNFeDistDFe103DistDFeIntV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema de pedido de distribuição de DF-e de interesse
     */
    public distDFeInt?: CPlNFeDistDFe103DistDFeIntV101DistDFeInt;

    /**
     * Creates a new schema-backed CPlNFeDistDFe103DistDFeIntV101 instance.
     * Schema context: Runtime class for CPlNFeDistDFe103DistDFeIntV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103DistDFeIntV101) {
        this["@class"] = ".CPlNFeDistDFe103DistDFeIntV101";


        if (props) {

        	this.distDFeInt = (props.distDFeInt) ? new CPlNFeDistDFe103DistDFeIntV101DistDFeInt(props.distDFeInt): undefined;
        }
    }
}
