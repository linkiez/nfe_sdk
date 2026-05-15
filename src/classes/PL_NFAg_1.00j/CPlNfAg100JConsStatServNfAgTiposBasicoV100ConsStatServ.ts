import { TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat';

/**
 * Tipo Pedido de Consulta do Status do Serviço NFAg
 */
export class CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ {
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
     * Tipo Versão do Consulta do Status do Serviço NFAg
     */
    public $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;

    /**
     * Creates a new schema-backed CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ instance.
     * Schema context: Tipo Pedido de Consulta do Status do Serviço NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ) {
        this["@class"] = ".CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.xServ = props.xServ;
        	this.$versao = props.$versao;
        }
    }
}
