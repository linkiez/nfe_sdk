import { TEventoEconfV100ProcEventoEConfV100ProcEventoNFe } from '../../types/Evento_Econf_v1.00/TEventoEconfV100ProcEventoEConfV100ProcEventoNFe';

/**
 * Runtime class for CEventoEconfV100ProcEventoEConfV100.
 */
export class CEventoEconfV100ProcEventoEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoEconfV100ProcEventoEConfV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoEconfV100ProcEventoEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100ProcEventoEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100ProcEventoEConfV100) {
        this["@class"] = ".CEventoEconfV100ProcEventoEConfV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
