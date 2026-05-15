import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
