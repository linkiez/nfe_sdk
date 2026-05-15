import { TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoEntregaNFePlV101ProcEventoEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101ProcEventoEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101ProcEventoEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101ProcEventoEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101ProcEventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101ProcEventoEntregaNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
