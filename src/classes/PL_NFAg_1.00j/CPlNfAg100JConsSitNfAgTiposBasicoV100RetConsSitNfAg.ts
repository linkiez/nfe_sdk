import { CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg } from './CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg';

import { CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg } from './CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg';

import { TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual de NFAg
 */
export class CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg {
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
     * Retornar protNF3e da versão correspondente da NFAg autorizada
     */
    public protNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg;
    /**
     * Retornar procEventoNFAg da versão correspondente do evento NFAg autorizado
     */
    public procEventoNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg;
    /**
     * Tipo Versão do Consulta situação de NFAg - 1.00
     */
    public $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg instance.
     * Schema context: Tipo Retorno de Pedido de Consulta da Situação Atual de NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg) {
        this["@class"] = ".CPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.protNFAg = (props.protNFAg) ? new CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg(props.protNFAg): undefined;
        	this.procEventoNFAg = (props.procEventoNFAg) ? new CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg(props.procEventoNFAg): undefined;
        	this.$versao = props.$versao;
        }
    }
}
