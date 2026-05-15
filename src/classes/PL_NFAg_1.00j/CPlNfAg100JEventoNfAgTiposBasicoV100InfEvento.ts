import { CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento } from './CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento';

import { CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa } from './CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar SUFRAMA
     */
    public cOrgao?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Schema property CNPJ.
     */
    public CNPJ?: unknown;
    /**
     * Chave de Acesso NFAg vinculada
     */
    public chNFAg?: unknown;
    /**
     * Schema property dh Evento.
     */
    public dhEvento?: unknown;
    /**
     * Detalhamento do evento específico
     */
    public detEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento;
    /**
     * Grupo de Informação do Provedor de Assinatura e Autorização
     */
    public infPAA?: CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa;
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
     * Data e Hora de do recebimento do evento ou do registro do evento formato AAAA-MM-DDThh:mm:ssTZD
     */
    public dhRegEvento?: unknown;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.CNPJ = props.CNPJ;
        	this.chNFAg = props.chNFAg;
        	this.dhEvento = props.dhEvento;
        	this.detEvento = (props.detEvento) ? new CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento(props.detEvento): undefined;
        	this.infPAA = (props.infPAA) ? new CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa(props.infPAA): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.dhRegEvento = props.dhRegEvento;
        	this.nProt = props.nProt;
        }
    }
}
