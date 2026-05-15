import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
