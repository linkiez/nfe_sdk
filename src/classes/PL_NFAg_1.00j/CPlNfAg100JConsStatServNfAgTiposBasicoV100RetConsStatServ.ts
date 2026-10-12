import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat';

/**
 * Tipo Resultado da Consulta do Status do Serviço NFAg
 */
export class CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ {
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
     * Tipo Versão do Consulta do Status do Serviço NFAg
     */
    public $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;

    /**
     * Creates a new schema-backed CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ instance.
     * Schema context: Tipo Resultado da Consulta do Status do Serviço NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ) {
        this["@class"] = ".CPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "cStat", "xMotivo", "cUF", "dhRecbto", "dhRetorno", "$versao"]);
        }
    }
}
