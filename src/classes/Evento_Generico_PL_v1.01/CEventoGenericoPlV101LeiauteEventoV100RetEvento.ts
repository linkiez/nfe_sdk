import { CEventoGenericoPlV101LeiauteEventoV100InfEvento } from './CEventoGenericoPlV101LeiauteEventoV100InfEvento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoGenericoPlV101LeiauteEventoV100RetEvento {
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
    public infEvento?: CEventoGenericoPlV101LeiauteEventoV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101LeiauteEventoV100RetEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100RetEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoGenericoPlV101LeiauteEventoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
