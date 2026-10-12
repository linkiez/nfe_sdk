import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do òrgao que registrou o Evento
     */
    public cOrgao?: unknown;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
