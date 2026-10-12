import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["procEventoNFe"]);
        }
    }
}
