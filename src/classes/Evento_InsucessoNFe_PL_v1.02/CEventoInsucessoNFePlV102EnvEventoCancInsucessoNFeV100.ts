import { TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento';

/**
 * Runtime class for CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
