import { TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoCCePlV101ProcCCeNFeV100.
 */
export class CEventoCCePlV101ProcCCeNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoCCePlV101ProcCCeNFeV100 instance.
     * Schema context: Runtime class for CEventoCCePlV101ProcCCeNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101ProcCCeNFeV100) {
        this["@class"] = ".CEventoCCePlV101ProcCCeNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
