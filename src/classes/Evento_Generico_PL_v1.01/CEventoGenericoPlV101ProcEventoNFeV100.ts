import { TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoGenericoPlV101ProcEventoNFeV100.
 */
export class CEventoGenericoPlV101ProcEventoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101ProcEventoNFeV100 instance.
     * Schema context: Runtime class for CEventoGenericoPlV101ProcEventoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101ProcEventoNFeV100) {
        this["@class"] = ".CEventoGenericoPlV101ProcEventoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
