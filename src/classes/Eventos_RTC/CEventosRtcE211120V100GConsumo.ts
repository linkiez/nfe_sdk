import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211120V100DFeReferenciado } from './CEventosRtcE211120V100DFeReferenciado';

import { CEventosRtcE211120V100GControleEstoque } from './CEventosRtcE211120V100GControleEstoque';

/**
 * Informações por item da NF-e de Aquisição
 */
export class CEventosRtcE211120V100GConsumo {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS na nota de aquisição correspondente à quantidade destinada a uso e consumo pessoal
     */
    public vIBS?: unknown;
    /**
     * Valor da CBS na nota de aquisição correspondente à quantidade destinada a uso e consumo pessoal
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade para consumo de pessoa física
     */
    public gControleEstoque?: CEventosRtcE211120V100GControleEstoque;
    /**
     * Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
     */
    public CEventosRtcE211120V100DFeReferenciado?: CEventosRtcE211120V100DFeReferenciado;

    /**
     * Creates a new schema-backed CEventosRtcE211120V100GConsumo instance.
     * Schema context: Informações por item da NF-e de Aquisição
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211120V100GConsumo) {
        this["@class"] = ".CEventosRtcE211120V100GConsumo";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211120V100GControleEstoque(props.gControleEstoque): undefined;
        	this.CEventosRtcE211120V100DFeReferenciado = (props.CEventosRtcE211120V100DFeReferenciado) ? new CEventosRtcE211120V100DFeReferenciado(props.CEventosRtcE211120V100DFeReferenciado): undefined;
        }
    }
}
