import { TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe';

/**
 * Runtime class for CEventoProrrogIndust10SchemasProcRemIndusV100.
 */
export class CEventoProrrogIndust10SchemasProcRemIndusV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasProcRemIndusV100 instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasProcRemIndusV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasProcRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasProcRemIndusV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
