import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento {
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
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
