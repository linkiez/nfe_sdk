import { CEventoEconfV100LeiauteEventoEConfV100Evento } from './CEventoEconfV100LeiauteEventoEConfV100Evento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoEconfV100LeiauteEventoEConfV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoEConfV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100EnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoEConfV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
