import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from './CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Retorno do Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas
 */
export class CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou a NF-e
     */
    public verAplic?: unknown;
    /**
     * Número do Recibo Consultado
     */
    public nRec?: unknown;
    /**
     * Código do status da mensagem enviada.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do serviço solicitado.
     */
    public xMotivo?: unknown;
    /**
     * código da UF de atendimento
     */
    public cUF?: unknown;
    /**
     * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Em caso de Rejeição, com data e hora do recebimento do Lote de NF-e enviado.
     */
    public dhRecbto?: unknown;
    /**
     * Protocolo de status resultado do processamento da NF-e
     */
    public protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
    /**
     * Tipo Versão da NF-e - 4.00
     */
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe instance.
     * Schema context: Tipo Retorno do Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.nRec = props.nRec;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.dhRecbto = props.dhRecbto;
        	this.protNFe = (props.protNFe) ? new CPl010CNt2022002V130LeiauteNFeV400ProtNFe(props.protNFe): undefined;
        	this.$versao = props.$versao;
        }
    }
}
