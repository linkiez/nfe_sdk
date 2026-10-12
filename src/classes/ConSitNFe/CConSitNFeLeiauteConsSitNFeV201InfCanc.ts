import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Dados do Resultado do Pedido de Cancelamento da Nota Fiscal Eletrônica
 */
export class CConSitNFeLeiauteConsSitNFeV201InfCanc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou o pedido de cancelamento
     */
    public verAplic?: unknown;
    /**
     * Código do status da mensagem enviada.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do serviço solicitado.
     */
    public xMotivo?: unknown;
    /**
     * código da UF de atendimento
     */
    public cUF?: unknown;
    /**
     * Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente, modelo, série e número da NF-e e código numérico + DV.
     */
    public chNFe?: unknown;
    /**
     * Data e hora de recebimento, no formato AAAA-MM-DDTHH:MM:SS. Deve ser preenchida com data e hora da gravação no Banco em caso de Confirmação.
     */
    public dhRecbto?: unknown;
    /**
     * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - código da UF - 2 posições ano; 10 seqüencial no ano.
     */
    public nProt?: unknown;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201InfCanc instance.
     * Schema context: Dados do Resultado do Pedido de Cancelamento da Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201InfCanc) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201InfCanc";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cStat", "xMotivo", "cUF", "chNFe", "dhRecbto", "nProt"]);
        }
    }
}
