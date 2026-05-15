import { CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento } from './CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento {
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
    public infEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
