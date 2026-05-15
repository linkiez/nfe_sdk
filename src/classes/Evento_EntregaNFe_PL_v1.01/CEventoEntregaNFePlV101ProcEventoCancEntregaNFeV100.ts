import { TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
