import { CEventoEpecNfCePl100RetEventoEpecV001RetEvento } from './CEventoEpecNfCePl100RetEventoEpecV001RetEvento';

import { TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge';

/**
 * Identificador de controle do Lote de envio do Evento, conforme informado na mensagem de entrada.
 */
export class CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento {
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
     * TAG de grupo do resultado do processamento do Evento
     */
    public retEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEvento;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento instance.
     * Schema context: Identificador de controle do Lote de envio do Evento, conforme informado na mensagem de entrada.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEpecNfCePl100RetEventoEpecV001RetEvento(props.retEvento): undefined;
        }
    }
}
