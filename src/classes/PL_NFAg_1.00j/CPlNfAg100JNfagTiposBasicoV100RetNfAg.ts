import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JNfagTiposBasicoV100ProtNfAg } from './CPlNfAg100JNfagTiposBasicoV100ProtNfAg';

import { TPlNfAg100JNfagTiposBasicoV100VerNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100VerNfAg';

/**
 * Tipo Retorno do Pedido de Autorização de NFAg
 */
export class CPlNfAg100JNfagTiposBasicoV100RetNfAg {
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
     * Versão do Aplicativo que processou a NFAg
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
     * Reposta ao processamento da NFAg
     */
    public protNFAg?: CPlNfAg100JNfagTiposBasicoV100ProtNfAg;
    /**
     * Tipo Versão da NFAg
     */
    public $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100RetNfAg instance.
     * Schema context: Tipo Retorno do Pedido de Autorização de NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100RetNfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100RetNfAg";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "cUF", "verAplic", "cStat", "xMotivo"]);
        	this.protNFAg = (props.protNFAg) ? new CPlNfAg100JNfagTiposBasicoV100ProtNfAg(props.protNFAg): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
