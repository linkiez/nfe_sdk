import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecNfCePl100EventoEpecV001DetEvento } from './CEventoEpecNfCePl100EventoEpecV001DetEvento';

import { TEventoEpecNfCePl100EventoEpecV001COrgaoIbge } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100EventoEpecV001COrgaoIbge';

import { TEventoEpecNfCePl100EventoEpecV001VerEvento } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100EventoEpecV001VerEvento';

/**
 * Grupo de informações do registro do Evento
 */
export class CEventoEpecNfCePl100EventoEpecV001InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento.
     */
    public cOrgao?: TEventoEpecNfCePl100EventoEpecV001COrgaoIbge;
    /**
     * Identificação do Ambiente: 1=Produção /2=Homologação
     */
    public tpAmb?: unknown;
    /**
     * Para o evento de EPEC, a posição 35 da Chave de Acesso deve ser 4 (tpEmis=4).
     */
    public chNFe?: unknown;
    /**
     * Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time).
     */
    public dhEvento?: unknown;
    /**
     * Versão do detalhe do evento (grupo detEvento - P17), informação usada pela SEFAZ para validar o grupo detEvento.
     */
    public verEvento?: TEventoEpecNfCePl100EventoEpecV001VerEvento;
    /**
     * Informações de detalhes do evento
     */
    public detEvento?: CEventoEpecNfCePl100EventoEpecV001DetEvento;

    //choice

    /**
     * CNPJ
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100EventoEpecV001InfEvento instance.
     * Schema context: Grupo de informações do registro do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001InfEvento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "chNFe", "dhEvento", "verEvento"]);
        	this.detEvento = (props.detEvento) ? new CEventoEpecNfCePl100EventoEpecV001DetEvento(props.detEvento): undefined;
        }
    }
}
