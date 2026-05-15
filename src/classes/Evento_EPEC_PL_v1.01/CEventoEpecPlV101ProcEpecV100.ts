import { TEventoEpecPlV101ProcEpecV100ProcEventoNFe } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101ProcEpecV100ProcEventoNFe';

/**
 * Runtime class for CEventoEpecPlV101ProcEpecV100.
 */
export class CEventoEpecPlV101ProcEpecV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoEpecPlV101ProcEpecV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoEpecPlV101ProcEpecV100 instance.
     * Schema context: Runtime class for CEventoEpecPlV101ProcEpecV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101ProcEpecV100) {
        this["@class"] = ".CEventoEpecPlV101ProcEpecV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
