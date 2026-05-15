import { CEventoAtorInteressadoPlV102110150V100DetEvento } from './CEventoAtorInteressadoPlV102110150V100DetEvento';

/**
 * Runtime class for CEventoAtorInteressadoPlV102110150V100.
 */
export class CEventoAtorInteressadoPlV102110150V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
     */
    public detEvento?: CEventoAtorInteressadoPlV102110150V100DetEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102110150V100 instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102110150V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102110150V100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102110150V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoAtorInteressadoPlV102110150V100DetEvento(props.detEvento): undefined;
        }
    }
}
