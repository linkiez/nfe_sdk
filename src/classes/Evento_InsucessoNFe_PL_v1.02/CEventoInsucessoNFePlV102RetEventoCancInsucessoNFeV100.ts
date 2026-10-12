import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento';

/**
 * Runtime class for CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
