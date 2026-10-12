import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas';

/**
 * Tipo Pedido de Consulta da Situação Atual da NFGas
 */
export class CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção; 2 - Homologação;
     */
    public tpAmb?: unknown;
    /**
     * Serviço Solicitado
     */
    public xServ?: unknown;
    /**
     * Chaves de acesso da NFGas
     */
    public chNFGas?: unknown;
    /**
     * Tipo Versão do Consulta situação de NFGas - 1.00
     */
    public $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas instance.
     * Schema context: Tipo Pedido de Consulta da Situação Atual da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas) {
        this["@class"] = ".CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "xServ", "chNFGas", "$versao"]);
        }
    }
}
