import { TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge';

/**
 * Grupo de informações do registro do Evento
 */
export class CEventoEpecNfCePl100RetEventoEpecV001InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1=Produção /2=Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão.
     */
    public verAplic?: unknown;
    /**
     * Código da UF que registrou o Evento.
     */
    public cOrgao?: TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge;
    /**
     * Código do status da resposta.
     */
    public cStat?: unknown;
    /**
     * Descrição do status da resposta.
     */
    public xMotivo?: unknown;
    /**
     * Chave de Acesso da NFC-e vinculada ao evento.
     */
    public chNFe?: unknown;
    /**
     * Idem a mensagem de entrada.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Data e hora de registro do evento no formato AAAA-MM-DDTHH:MM:SSTZD (formato UTC, onde TZD é +HH:MM ou HH:MM). Se o evento for rejeitado informar a data e hora de recebimento do evento.
     */
    public dhRegEvento?: unknown;
    /**
     * Número do Protocolo do Evento
     */
    public nProt?: unknown;
    /**
     * Relação de Chaves de Acesso de EPEC pendentes de
     */
    public chNFePend?: unknown;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100RetEventoEpecV001InfEvento instance.
     * Schema context: Grupo de informações do registro do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001InfEvento) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001InfEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.chNFe = props.chNFe;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.dhRegEvento = props.dhRegEvento;
        	this.nProt = props.nProt;
        	this.chNFePend = props.chNFePend;
        }
    }
}
