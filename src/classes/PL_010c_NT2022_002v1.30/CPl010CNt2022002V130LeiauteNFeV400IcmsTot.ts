/**
 * Totais referentes ao ICMS
 */
export class CPl010CNt2022002V130LeiauteNFeV400IcmsTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * BC do ICMS
     */
    public vBC?: unknown;
    /**
     * Valor Total do ICMS
     */
    public vICMS?: unknown;
    /**
     * Valor Total do ICMS desonerado
     */
    public vICMSDeson?: unknown;
    /**
     * Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino.
     */
    public vFCPUFDest?: unknown;
    /**
     * Valor total do ICMS de partilha para a UF do destinatário
     */
    public vICMSUFDest?: unknown;
    /**
     * Valor total do ICMS de partilha para a UF do remetente
     */
    public vICMSUFRemet?: unknown;
    /**
     * Valor Total do FCP (Fundo de Combate à Pobreza).
     */
    public vFCP?: unknown;
    /**
     * BC do ICMS ST
     */
    public vBCST?: unknown;
    /**
     * Valor Total do ICMS ST
     */
    public vST?: unknown;
    /**
     * Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária.
     */
    public vFCPST?: unknown;
    /**
     * Valor Total do FCP (Fundo de Combate à Pobreza) retido anteriormente por substituição tributária.
     */
    public vFCPSTRet?: unknown;
    /**
     * Valor total da quantidade tributada do ICMS monofásico próprio
     */
    public qBCMono?: unknown;
    /**
     * Valor total do ICMS monofásico próprio
     */
    public vICMSMono?: unknown;
    /**
     * Valor total da quantidade tributada do ICMS monofásico sujeito a retenção
     */
    public qBCMonoReten?: unknown;
    /**
     * Valor total do ICMS monofásico sujeito a retenção
     */
    public vICMSMonoReten?: unknown;
    /**
     * Valor total da quantidade tributada do ICMS monofásico retido anteriormente
     */
    public qBCMonoRet?: unknown;
    /**
     * Valor do ICMS monofásico retido anteriormente
     */
    public vICMSMonoRet?: unknown;
    /**
     * Valor Total dos produtos e serviços
     */
    public vProd?: unknown;
    /**
     * Valor Total do Frete
     */
    public vFrete?: unknown;
    /**
     * Valor Total do Seguro
     */
    public vSeg?: unknown;
    /**
     * Valor Total do Desconto
     */
    public vDesc?: unknown;
    /**
     * Valor Total do II
     */
    public vII?: unknown;
    /**
     * Valor Total do IPI
     */
    public vIPI?: unknown;
    /**
     * Valor Total do IPI devolvido. Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id: UA04.
     */
    public vIPIDevol?: unknown;
    /**
     * Valor do PIS
     */
    public vPIS?: unknown;
    /**
     * Valor do COFINS
     */
    public vCOFINS?: unknown;
    /**
     * Outras Despesas acessórias
     */
    public vOutro?: unknown;
    /**
     * Valor Total da NF-e
     */
    public vNF?: unknown;
    /**
     * Valor estimado total de impostos federais, estaduais e municipais
     */
    public vTotTrib?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400IcmsTot instance.
     * Schema context: Totais referentes ao ICMS
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400IcmsTot) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400IcmsTot";


        if (props) {

        	this.vBC = props.vBC;
        	this.vICMS = props.vICMS;
        	this.vICMSDeson = props.vICMSDeson;
        	this.vFCPUFDest = props.vFCPUFDest;
        	this.vICMSUFDest = props.vICMSUFDest;
        	this.vICMSUFRemet = props.vICMSUFRemet;
        	this.vFCP = props.vFCP;
        	this.vBCST = props.vBCST;
        	this.vST = props.vST;
        	this.vFCPST = props.vFCPST;
        	this.vFCPSTRet = props.vFCPSTRet;
        	this.qBCMono = props.qBCMono;
        	this.vICMSMono = props.vICMSMono;
        	this.qBCMonoReten = props.qBCMonoReten;
        	this.vICMSMonoReten = props.vICMSMonoReten;
        	this.qBCMonoRet = props.qBCMonoRet;
        	this.vICMSMonoRet = props.vICMSMonoRet;
        	this.vProd = props.vProd;
        	this.vFrete = props.vFrete;
        	this.vSeg = props.vSeg;
        	this.vDesc = props.vDesc;
        	this.vII = props.vII;
        	this.vIPI = props.vIPI;
        	this.vIPIDevol = props.vIPIDevol;
        	this.vPIS = props.vPIS;
        	this.vCOFINS = props.vCOFINS;
        	this.vOutro = props.vOutro;
        	this.vNF = props.vNF;
        	this.vTotTrib = props.vTotTrib;
        }
    }
}
