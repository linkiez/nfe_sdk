import { TEventoCCePlV101RetEnvCCeV100RetEnvEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101RetEnvCCeV100RetEnvEvento';

/**
 * Runtime class for CEventoCCePlV101RetEnvCCeV100.
 */
export class CEventoCCePlV101RetEnvCCeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoCCePlV101RetEnvCCeV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101RetEnvCCeV100 instance.
     * Schema context: Runtime class for CEventoCCePlV101RetEnvCCeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101RetEnvCCeV100) {
        this["@class"] = ".CEventoCCePlV101RetEnvCCeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
