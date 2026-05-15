import { TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe';

/**
 * Runtime class for CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100.
 */
export class CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100 instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
