import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat';

/**
 * Tipo Pedido de Consulta do Status do Serviço NFGas
 */
export class CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Serviço Solicitado
     */
    public xServ?: unknown;
    /**
     * Tipo Versão do Consulta do Status do Serviço NFGas
     */
    public $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;

    /**
     * Creates a new schema-backed CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ instance.
     * Schema context: Tipo Pedido de Consulta do Status do Serviço NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ) {
        this["@class"] = ".CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "xServ", "$versao"]);
        }
    }
}
