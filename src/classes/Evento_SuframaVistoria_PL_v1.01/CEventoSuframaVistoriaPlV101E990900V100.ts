import { CEventoSuframaVistoriaPlV101E990900V100DetEvento } from './CEventoSuframaVistoriaPlV101E990900V100DetEvento';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101E990900V100.
 */
export class CEventoSuframaVistoriaPlV101E990900V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento doVistoria SUFRAMA 990900
     */
    public detEvento?: CEventoSuframaVistoriaPlV101E990900V100DetEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101E990900V100 instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101E990900V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101E990900V100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101E990900V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoSuframaVistoriaPlV101E990900V100DetEvento(props.detEvento): undefined;
        }
    }
}
