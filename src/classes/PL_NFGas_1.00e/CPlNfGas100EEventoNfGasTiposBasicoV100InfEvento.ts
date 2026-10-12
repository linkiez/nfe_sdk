import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento } from './CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar SUFRAMA
     */
    public cOrgao?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Schema property CNPJ.
     */
    public CNPJ?: unknown;
    /**
     * Chave de Acesso NFGas vinculada
     */
    public chNFGas?: unknown;
    /**
     * Schema property dh Evento.
     */
    public dhEvento?: unknown;
    /**
     * Detalhamento do evento específico
     */
    public detEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento;
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
     * Data e Hora de do recebimento do evento ou do registro do evento formato AAAA-MM-DDThh:mm:ssTZD
     */
    public dhRegEvento?: unknown;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento) {
        this["@class"] = ".CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "CNPJ", "chNFGas", "dhEvento"]);
        	this.detEvento = (props.detEvento) ? new CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["verAplic", "cStat", "xMotivo", "dhRegEvento", "nProt"]);
        }
    }
}
