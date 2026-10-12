import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
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
     * Schema XML de validação do evento doVistoria SUFRAMA 990900
     */
    public detEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento;
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

    //choice

    /**
     * Selects the tevento suframa vistoria pl v101 leiaute suframa vistoria v100 cnpj dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest = arg;
    }

    //choice

    /**
     * Selects the tevento suframa vistoria pl v101 leiaute suframa vistoria v100 cpf dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "chNFe", "dhEvento"]);
        	this.detEvento = (props.detEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["verAplic", "cStat", "xMotivo", "nProt"]);
        }
    }
}
