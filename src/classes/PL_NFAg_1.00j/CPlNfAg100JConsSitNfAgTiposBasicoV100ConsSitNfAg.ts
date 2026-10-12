import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg';

/**
 * Tipo Pedido de Consulta da Situação Atual da NFAg
 */
export class CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg {
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
     * Chaves de acesso da NFAg
     */
    public chNFAg?: unknown;
    /**
     * Tipo Versão do Consulta situação de NFAg - 1.00
     */
    public $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg instance.
     * Schema context: Tipo Pedido de Consulta da Situação Atual da NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg) {
        this["@class"] = ".CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "xServ", "chNFAg", "$versao"]);
        }
    }
}
