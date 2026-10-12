import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Dados do protocolo de status
 */
export class CPlNfGas100ENfgasTiposBasicoV100InfProt {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou a NFGas
     */
    public verAplic?: unknown;
    /**
     * Chave de acesso da NFGas
     */
    public chNFGas?: unknown;
    /**
     * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD.
     */
    public dhRecbto?: unknown;
    /**
     * Número do Protocolo de Status da NFGas.
     */
    public nProt?: unknown;
    /**
     * Digest Value da NFGas processado. Utilizado para conferir a integridade da NFGas original.
     */
    public digVal?: unknown;
    /**
     * Descrição literal do status da NFGas
     */
    public xMotivo?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100InfProt instance.
     * Schema context: Dados do protocolo de status
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100InfProt) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100InfProt";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "chNFGas", "dhRecbto", "nProt", "digVal", "xMotivo"]);
        }
    }
}
