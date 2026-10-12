import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento {
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
    public retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
