import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoAverbPlV101LeiauteAverbV100TretEvento } from './CEventoAverbPlV101LeiauteAverbV100TretEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEnvEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoAverbPlV101LeiauteAverbV100RetEnvEvento {
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
    public retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101LeiauteAverbV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100RetEnvEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoAverbPlV101LeiauteAverbV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
