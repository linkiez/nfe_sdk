import { CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt } from './CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt';

/**
 * Runtime class for CPlNFeDistDFe103RetDistDFeIntV101.
 */
export class CPlNFeDistDFe103RetDistDFeIntV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema do resultado do pedido de distribuição de DF-e de interesse
     */
    public retDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt;

    /**
     * Creates a new schema-backed CPlNFeDistDFe103RetDistDFeIntV101 instance.
     * Schema context: Runtime class for CPlNFeDistDFe103RetDistDFeIntV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103RetDistDFeIntV101) {
        this["@class"] = ".CPlNFeDistDFe103RetDistDFeIntV101";


        if (props) {

        	this.retDistDFeInt = (props.retDistDFeInt) ? new CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt(props.retDistDFeInt): undefined;
        }
    }
}
