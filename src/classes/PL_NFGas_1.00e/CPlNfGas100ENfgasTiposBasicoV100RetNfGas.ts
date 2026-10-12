import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100ENfgasTiposBasicoV100ProtNfGas } from './CPlNfGas100ENfgasTiposBasicoV100ProtNfGas';

import { TPlNfGas100ENfgasTiposBasicoV100VerNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100VerNfGas';

/**
 * Tipo Retorno do Pedido de Autorização de NFGas
 */
export class CPlNfGas100ENfgasTiposBasicoV100RetNfGas {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Identificação da UF
     */
    public cUF?: unknown;
    /**
     * Versão do Aplicativo que processou a NFGas
     */
    public verAplic?: unknown;
    /**
     * código do status do retorno da consulta.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do do retorno da consulta.
     */
    public xMotivo?: unknown;
    /**
     * Reposta ao processamento da NFGas
     */
    public protNFGas?: CPlNfGas100ENfgasTiposBasicoV100ProtNfGas;
    /**
     * Tipo Versão da NFGas
     */
    public $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100RetNfGas instance.
     * Schema context: Tipo Retorno do Pedido de Autorização de NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100RetNfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100RetNfGas";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "cUF", "verAplic", "cStat", "xMotivo"]);
        	this.protNFGas = (props.protNFGas) ? new CPlNfGas100ENfgasTiposBasicoV100ProtNfGas(props.protNFGas): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
