import { CEventoAverbPlV101E790700V100DetEvento } from './CEventoAverbPlV101E790700V100DetEvento';

/**
 * Runtime class for CEventoAverbPlV101E790700V100.
 */
export class CEventoAverbPlV101E790700V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de averbação da NFe (e790700)
     */
    public detEvento?: CEventoAverbPlV101E790700V100DetEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101E790700V100 instance.
     * Schema context: Runtime class for CEventoAverbPlV101E790700V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101E790700V100) {
        this["@class"] = ".CEventoAverbPlV101E790700V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoAverbPlV101E790700V100DetEvento(props.detEvento): undefined;
        }
    }
}
