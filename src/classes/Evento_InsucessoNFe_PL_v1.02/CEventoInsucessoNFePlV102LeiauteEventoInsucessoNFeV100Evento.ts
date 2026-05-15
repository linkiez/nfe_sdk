import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento {
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
    public infEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
