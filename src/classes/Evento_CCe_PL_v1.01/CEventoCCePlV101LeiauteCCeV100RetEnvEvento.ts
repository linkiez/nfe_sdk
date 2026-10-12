import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCCePlV101LeiauteCCeV100TretEvento } from './CEventoCCePlV101LeiauteCCeV100TretEvento';

import { TEventoCCePlV101LeiauteCCeV100COrgaoIbge } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100COrgaoIbge';

import { TEventoCCePlV101LeiauteCCeV100VerEnvEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoCCePlV101LeiauteCCeV100RetEnvEvento {
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
    public cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
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
    public retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101LeiauteCCeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101LeiauteCCeV100RetEnvEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoCCePlV101LeiauteCCeV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
