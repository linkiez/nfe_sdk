import { CEventoCancPlV101E110111V100DetEvento } from './CEventoCancPlV101E110111V100DetEvento';

/**
 * Runtime class for CEventoCancPlV101E110111V100.
 */
export class CEventoCancPlV101E110111V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento do cancelamento 1101111
     */
    public detEvento?: CEventoCancPlV101E110111V100DetEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101E110111V100 instance.
     * Schema context: Runtime class for CEventoCancPlV101E110111V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101E110111V100) {
        this["@class"] = ".CEventoCancPlV101E110111V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCancPlV101E110111V100DetEvento(props.detEvento): undefined;
        }
    }
}
