import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento';

/**
 * Runtime class for CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
