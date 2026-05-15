import { TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe';

/**
 * Tipo Pedido de Consulta da Situação Atual da Nota Fiscal Eletrônica
 */
export class CConSitNFeLeiauteConsSitNFeV201ConsSitNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente, modelo, série e número da NF-e e código numérico + DV.
     */
    public chNFe?: unknown;
    /**
     * Tipo Versão do Leiaute da Cosulta situação NF-e - 2.01
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201ConsSitNFe instance.
     * Schema context: Tipo Pedido de Consulta da Situação Atual da Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201ConsSitNFe) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201ConsSitNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.$versao = props.$versao;
        }
    }
}
