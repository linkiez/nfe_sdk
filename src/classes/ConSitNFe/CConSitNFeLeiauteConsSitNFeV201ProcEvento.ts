import { CConSitNFeLeiauteConsSitNFeV201Evento } from './CConSitNFeLeiauteConsSitNFeV201Evento';

import { CConSitNFeLeiauteConsSitNFeV201RetEvento } from './CConSitNFeLeiauteConsSitNFeV201RetEvento';

import { TConSitNFeLeiauteConsSitNFeV201VerEvento } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerEvento';

/**
 * Tipo procEvento
 */
export class CConSitNFeLeiauteConsSitNFeV201ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CConSitNFeLeiauteConsSitNFeV201Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CConSitNFeLeiauteConsSitNFeV201RetEvento;
    /**
     * Tipo Versão do Evento 1.00
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerEvento;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201ProcEvento) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CConSitNFeLeiauteConsSitNFeV201Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CConSitNFeLeiauteConsSitNFeV201RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
