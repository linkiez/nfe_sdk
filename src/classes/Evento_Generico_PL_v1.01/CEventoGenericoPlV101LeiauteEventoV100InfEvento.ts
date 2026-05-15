import { CEventoGenericoPlV101LeiauteEventoV100DetEvento } from './CEventoGenericoPlV101LeiauteEventoV100DetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoGenericoPlV101LeiauteEventoV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
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
     * informações específicas do evento
     */
    public detEvento?: CEventoGenericoPlV101LeiauteEventoV100DetEvento;
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
     * Código do órgão de autor do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgaoAutor?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    //choice

    /**
     * CNPJ Destinatário
     * @param arg - Branch value assigned to CNPJDest.
     */
    public CNPJDest(arg: unknown) {
        delete((this as any).CPFDest);
        (this as any).CNPJDest = arg;
    }

    //choice

    /**
     * CPF Destiantário
     * @param arg - Branch value assigned to CPFDest.
     */
    public CPFDest(arg: unknown) {
        delete((this as any).CNPJDest);
        (this as any).CPFDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoGenericoPlV101LeiauteEventoV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100InfEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoGenericoPlV101LeiauteEventoV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.nProt = props.nProt;
        }
    }
}
