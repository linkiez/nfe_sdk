import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
     */
    public cOrgao?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Chave de Acesso NF-e vinculada
     */
    public chNFe?: unknown;
    /**
     * Schema property dh Evento.
     */
    public dhEvento?: unknown;
    /**
     * Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
     */
    public detEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.nProt = props.nProt;
        }
    }
}
