import { CEventoEconfV100E110750V100DetEvento } from './CEventoEconfV100E110750V100DetEvento';

/**
 * Runtime class for CEventoEconfV100E110750V100.
 */
export class CEventoEconfV100E110750V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de Conciliação Financeira – ECONF
     */
    public detEvento?: CEventoEconfV100E110750V100DetEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100E110750V100 instance.
     * Schema context: Runtime class for CEventoEconfV100E110750V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100E110750V100) {
        this["@class"] = ".CEventoEconfV100E110750V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoEconfV100E110750V100DetEvento(props.detEvento): undefined;
        }
    }
}
