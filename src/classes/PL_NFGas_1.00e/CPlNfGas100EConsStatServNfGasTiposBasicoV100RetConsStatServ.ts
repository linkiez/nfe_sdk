import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat';

/**
 * Tipo Resultado da Consulta do Status do Serviço NFGas
 */
export class CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Código do status da mensagem enviada.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do serviço solicitado.
     */
    public xMotivo?: unknown;
    /**
     * Código da UF responsável pelo serviço
     */
    public cUF?: unknown;
    /**
     * AAAA-MM-DDTHH:MM:SS TZD
     */
    public dhRecbto?: unknown;
    /**
     * AAAA-MM-DDTHH:MM:SS TZD. Deve ser preenchida com data e hora previstas para o retorno dos serviços prestados.
     */
    public dhRetorno?: unknown;
    /**
     * Tipo Versão do Consulta do Status do Serviço NFGas
     */
    public $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;

    /**
     * Creates a new schema-backed CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ instance.
     * Schema context: Tipo Resultado da Consulta do Status do Serviço NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ) {
        this["@class"] = ".CPlNfGas100EConsStatServNfGasTiposBasicoV100RetConsStatServ";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "cStat", "xMotivo", "cUF", "dhRecbto", "dhRetorno", "$versao"]);
        }
    }
}
