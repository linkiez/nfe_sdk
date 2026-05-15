import { TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoCancPlV101ProcEventoCancNFeV100.
 */
export class CEventoCancPlV101ProcEventoCancNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoCancPlV101ProcEventoCancNFeV100 instance.
     * Schema context: Runtime class for CEventoCancPlV101ProcEventoCancNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101ProcEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101ProcEventoCancNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
