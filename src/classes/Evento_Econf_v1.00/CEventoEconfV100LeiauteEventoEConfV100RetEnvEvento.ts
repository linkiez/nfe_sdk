import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEconfV100LeiauteEventoEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento {
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
    public retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoEConfV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
