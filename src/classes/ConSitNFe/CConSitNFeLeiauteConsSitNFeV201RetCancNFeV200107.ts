import { CConSitNFeLeiauteConsSitNFeV201InfCanc } from './CConSitNFeLeiauteConsSitNFeV201InfCanc';

import { TConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107 } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107';

/**
 * Tipo retorno Pedido de Cancelamento da Nota Fiscal Eletrônica
 */
export class CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Dados do Resultado do Pedido de Cancelamento da Nota Fiscal Eletrônica
     */
    public infCanc?: CConSitNFeLeiauteConsSitNFeV201InfCanc;
    /**
     * Tipo Versão do leiaute de Cancelamento de NF-e - 2.00/1.07
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 instance.
     * Schema context: Tipo retorno Pedido de Cancelamento da Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107";


        if (props) {

        	this.unknown = props.unknown;
        	this.infCanc = (props.infCanc) ? new CConSitNFeLeiauteConsSitNFeV201InfCanc(props.infCanc): undefined;
        	this.$versao = props.$versao;
        }
    }
}
