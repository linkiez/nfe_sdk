import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211130V100GImobilizacao } from './CEventosRtcE211130V100GImobilizacao';

/**
 * Informações do Evento de Imobilização de Item
 */
export class CEventosRtcE211130V100DetEvento {
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
     * Informações de itens integrados ao ativo imobilizado
     */
    public gImobilizacao?: CEventosRtcE211130V100GImobilizacao;

    /**
     * Creates a new schema-backed CEventosRtcE211130V100DetEvento instance.
     * Schema context: Informações do Evento de Imobilização de Item
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211130V100DetEvento) {
        this["@class"] = ".CEventosRtcE211130V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gImobilizacao = (props.gImobilizacao) ? new CEventosRtcE211130V100GImobilizacao(props.gImobilizacao): undefined;
        }
    }
}
