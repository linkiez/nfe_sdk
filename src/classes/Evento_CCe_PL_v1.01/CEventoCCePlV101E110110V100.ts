import { CEventoCCePlV101E110110V100DetEvento } from './CEventoCCePlV101E110110V100DetEvento';

/**
 * Runtime class for CEventoCCePlV101E110110V100.
 */
export class CEventoCCePlV101E110110V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento do carta de correção e1101110
     */
    public detEvento?: CEventoCCePlV101E110110V100DetEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101E110110V100 instance.
     * Schema context: Runtime class for CEventoCCePlV101E110110V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101E110110V100) {
        this["@class"] = ".CEventoCCePlV101E110110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCCePlV101E110110V100DetEvento(props.detEvento): undefined;
        }
    }
}
