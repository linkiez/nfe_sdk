import { CEventoCCePlV101LeiauteCCeV100Evento } from './CEventoCCePlV101LeiauteCCeV100Evento';

import { CEventoCCePlV101LeiauteCCeV100TretEvento } from './CEventoCCePlV101LeiauteCCeV100TretEvento';

import { TEventoCCePlV101LeiauteCCeV100VerEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoCCePlV101LeiauteCCeV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCCePlV101LeiauteCCeV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101LeiauteCCeV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101LeiauteCCeV100ProcEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCCePlV101LeiauteCCeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoCCePlV101LeiauteCCeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
