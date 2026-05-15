import { CEventoEntregaNFePlV101E110130V100DetEvento } from './CEventoEntregaNFePlV101E110130V100DetEvento';

/**
 * Runtime class for CEventoEntregaNFePlV101E110130V100.
 */
export class CEventoEntregaNFePlV101E110130V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de Comprovante de Entrega da NF-e
     */
    public detEvento?: CEventoEntregaNFePlV101E110130V100DetEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101E110130V100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101E110130V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101E110130V100) {
        this["@class"] = ".CEventoEntregaNFePlV101E110130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoEntregaNFePlV101E110130V100DetEvento(props.detEvento): undefined;
        }
    }
}
