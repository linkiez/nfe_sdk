import { CConSitNFeLeiauteConsSitNFeV201InfEvento } from './CConSitNFeLeiauteConsSitNFeV201InfEvento';

import { TConSitNFeLeiauteConsSitNFeV201VerEvento } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerEvento';

/**
 * Tipo Evento
 */
export class CConSitNFeLeiauteConsSitNFeV201Evento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public infEvento?: CConSitNFeLeiauteConsSitNFeV201InfEvento;
    /**
     * Tipo Versão do Evento 1.00
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerEvento;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201Evento) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CConSitNFeLeiauteConsSitNFeV201InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
