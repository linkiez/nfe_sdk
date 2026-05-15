import { CEventoCCePlV101LeiauteCCeV100DetEvento } from './CEventoCCePlV101LeiauteCCeV100DetEvento';

import { TEventoCCePlV101LeiauteCCeV100COrgaoIbge } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoCCePlV101LeiauteCCeV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
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
     * Evento do carta de correção e1101110
     */
    public detEvento?: CEventoCCePlV101LeiauteCCeV100DetEvento;
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
     * Creates a new schema-backed CEventoCCePlV101LeiauteCCeV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101LeiauteCCeV100InfEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CEventoCCePlV101LeiauteCCeV100DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
