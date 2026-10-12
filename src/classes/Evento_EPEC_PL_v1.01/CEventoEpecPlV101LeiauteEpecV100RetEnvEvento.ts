import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecPlV101LeiauteEpecV100RetEvento } from './CEventoEpecPlV101LeiauteEpecV100RetEvento';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoIbge } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoIbge';

import { TEventoEpecPlV101LeiauteEpecV100VerEnvEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoEpecPlV101LeiauteEpecV100RetEnvEvento {
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
    public cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
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
    public retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100RetEnvEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoEpecPlV101LeiauteEpecV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
