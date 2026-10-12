import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoAverbPlV101ProcAverbNFeV100.
 */
export class CEventoAverbPlV101ProcAverbNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoAverbPlV101ProcAverbNFeV100 instance.
     * Schema context: Runtime class for CEventoAverbPlV101ProcAverbNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101ProcAverbNFeV100) {
        this["@class"] = ".CEventoAverbPlV101ProcAverbNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["procEventoNFe"]);
        }
    }
}
