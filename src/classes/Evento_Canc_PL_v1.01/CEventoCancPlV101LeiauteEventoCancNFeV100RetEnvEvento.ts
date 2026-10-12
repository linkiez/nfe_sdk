import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from './CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento {
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
    public cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
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
    public retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
