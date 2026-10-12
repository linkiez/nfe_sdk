import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento {
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
    public cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
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
    public retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
