import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Dados do protocolo de status
 */
export class CPlNfAg100JNfagTiposBasicoV100InfProt {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou a NFAg
     */
    public verAplic?: unknown;
    /**
     * Chave de acesso da NFAg
     */
    public chNFAg?: unknown;
    /**
     * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD.
     */
    public dhRecbto?: unknown;
    /**
     * Número do Protocolo de Status da NFAg.
     */
    public nProt?: unknown;
    /**
     * Digest Value da NFAg processado. Utilizado para conferir a integridade da NFAg original.
     */
    public digVal?: unknown;
    /**
     * Descrição literal do status da NFAg
     */
    public xMotivo?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100InfProt instance.
     * Schema context: Dados do protocolo de status
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100InfProt) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100InfProt";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "chNFAg", "dhRecbto", "nProt", "digVal", "xMotivo"]);
        }
    }
}
