import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecPlV101LeiauteEpecV100DetEvento } from './CEventoEpecPlV101LeiauteEpecV100DetEvento';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoIbge } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoEpecPlV101LeiauteEpecV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Chave de Acesso NF-e vinculada
     */
    public chNFe?: unknown;
    /**
     * Schema property dh Evento.
     */
    public dhEvento?: unknown;
    /**
     * Schema XML de validação do evento de emissão prévia em contingência - 110140
     */
    public detEvento?: CEventoEpecPlV101LeiauteEpecV100DetEvento;
    /**
     * Schema property c Orgao Autor.
     */
    public cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;
    /**
     * Relação de Chaves de Acesso de EPEC não conciliados (pendentes de conciliação) existentes no AN.
     */
    public chNFePend?: unknown;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100InfEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "chNFe", "dhEvento"]);
        	this.detEvento = (props.detEvento) ? new CEventoEpecPlV101LeiauteEpecV100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic", "cStat", "xMotivo", "nProt", "chNFePend"]);
        }
    }
}
