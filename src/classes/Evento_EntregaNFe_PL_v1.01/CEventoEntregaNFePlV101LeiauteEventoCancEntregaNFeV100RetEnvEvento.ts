import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento {
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
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cOrgao", "cStat", "xMotivo"]);
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
