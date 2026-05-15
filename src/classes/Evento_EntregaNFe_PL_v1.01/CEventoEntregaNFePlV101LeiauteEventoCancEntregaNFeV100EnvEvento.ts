import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
