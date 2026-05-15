import { CEventoCCePlV101LeiauteCCeV100InfEvento } from './CEventoCCePlV101LeiauteCCeV100InfEvento';

import { TEventoCCePlV101LeiauteCCeV100VerEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoCCePlV101LeiauteCCeV100Evento {
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
    public infEvento?: CEventoCCePlV101LeiauteCCeV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101LeiauteCCeV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101LeiauteCCeV100Evento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoCCePlV101LeiauteCCeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
