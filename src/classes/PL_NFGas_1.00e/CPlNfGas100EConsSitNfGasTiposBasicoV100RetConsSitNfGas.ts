import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas } from './CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas';

import { CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas } from './CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas';

import { TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual de NFGas
 */
export class CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou o NF-3e
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
     * Retornar protNF3e da versão correspondente da NFGas autorizada
     */
    public protNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas;
    /**
     * Retornar procEventoNFGas da versão correspondente do evento NFGas autorizado
     */
    public procEventoNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas;
    /**
     * Tipo Versão do Consulta situação de NFGas - 1.00
     */
    public $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas instance.
     * Schema context: Tipo Retorno de Pedido de Consulta da Situação Atual de NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas) {
        this["@class"] = ".CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cStat", "xMotivo", "cUF"]);
        	this.protNFGas = (props.protNFGas) ? new CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas(props.protNFGas): undefined;
        	this.procEventoNFGas = (props.procEventoNFGas) ? new CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas(props.procEventoNFGas): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
