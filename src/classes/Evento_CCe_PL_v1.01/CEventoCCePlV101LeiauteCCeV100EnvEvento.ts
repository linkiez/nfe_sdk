import { CEventoCCePlV101LeiauteCCeV100Evento } from './CEventoCCePlV101LeiauteCCeV100Evento';

import { TEventoCCePlV101LeiauteCCeV100VerEnvEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoCCePlV101LeiauteCCeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCCePlV101LeiauteCCeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101LeiauteCCeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101LeiauteCCeV100EnvEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCCePlV101LeiauteCCeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
