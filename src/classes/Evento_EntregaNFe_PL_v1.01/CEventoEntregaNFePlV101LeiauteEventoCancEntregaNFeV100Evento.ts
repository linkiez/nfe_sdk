import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento {
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
    public infEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
