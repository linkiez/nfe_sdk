import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento';

/**
 * Runtime class for CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
