import { CEventosRtcE211124V100GPerecimento } from './CEventosRtcE211124V100GPerecimento';

/**
 * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente
 */
export class CEventosRtcE211124V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Informações por item da Nota de Aquisição
     */
    public gPerecimento?: CEventosRtcE211124V100GPerecimento;

    /**
     * Creates a new schema-backed CEventosRtcE211124V100DetEvento instance.
     * Schema context: Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211124V100DetEvento) {
        this["@class"] = ".CEventosRtcE211124V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gPerecimento = (props.gPerecimento) ? new CEventosRtcE211124V100GPerecimento(props.gPerecimento): undefined;
        }
    }
}
