import { CEventoEconfV100E110751V100DetEvento } from './CEventoEconfV100E110751V100DetEvento';

/**
 * Runtime class for CEventoEconfV100E110751V100.
 */
export class CEventoEconfV100E110751V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
     */
    public detEvento?: CEventoEconfV100E110751V100DetEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100E110751V100 instance.
     * Schema context: Runtime class for CEventoEconfV100E110751V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100E110751V100) {
        this["@class"] = ".CEventoEconfV100E110751V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoEconfV100E110751V100DetEvento(props.detEvento): undefined;
        }
    }
}
