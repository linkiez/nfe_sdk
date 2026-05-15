import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
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
     * Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
     */
    public detEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento;
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
     * Selects the tevento suframa internaliza pl v101 leiaute suframa internaliza v100 cnpj dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest = arg;
    }

    //choice

    /**
     * Selects the tevento suframa internaliza pl v101 leiaute suframa internaliza v100 cpf dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
