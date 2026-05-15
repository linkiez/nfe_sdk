import { CEventosRtcE211120V100GConsumo } from './CEventosRtcE211120V100GConsumo';

/**
 * Informações do Evento de Destinação de item para consumo pessoal
 */
export class CEventosRtcE211120V100DetEvento {
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
     * Informações por item da NF-e de Aquisição
     */
    public gConsumo?: CEventosRtcE211120V100GConsumo;

    /**
     * Creates a new schema-backed CEventosRtcE211120V100DetEvento instance.
     * Schema context: Informações do Evento de Destinação de item para consumo pessoal
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211120V100DetEvento) {
        this["@class"] = ".CEventosRtcE211120V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gConsumo = (props.gConsumo) ? new CEventosRtcE211120V100GConsumo(props.gConsumo): undefined;
        }
    }
}
