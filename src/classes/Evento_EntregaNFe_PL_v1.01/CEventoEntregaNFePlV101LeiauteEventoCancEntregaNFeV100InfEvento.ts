import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property det Evento.
     */
    public detEvento?: unknown;
    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
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
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["detEvento", "cOrgao", "tpAmb", "chNFe", "dhEvento", "verAplic", "cStat", "xMotivo", "nProt"]);
        }
    }
}
