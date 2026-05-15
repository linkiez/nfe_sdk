import { CEventoEconfV100E110750V100DetPag } from './CEventoEconfV100E110750V100DetPag';

/**
 * Schema XML de validação do evento de Conciliação Financeira – ECONF
 */
export class CEventoEconfV100E110750V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão do Aplicativo do Autor do Evento
     */
    public verAplic?: unknown;
    /**
     * Grupo de detalhamento da forma de pagamento.
     */
    public detPag?: CEventoEconfV100E110750V100DetPag;

    /**
     * Creates a new schema-backed CEventoEconfV100E110750V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Conciliação Financeira – ECONF
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100E110750V100DetEvento) {
        this["@class"] = ".CEventoEconfV100E110750V100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.detPag = (props.detPag) ? new CEventoEconfV100E110750V100DetPag(props.detPag): undefined;
        }
    }
}
