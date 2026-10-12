import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
