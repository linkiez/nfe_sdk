/**
 * Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS
 */
export class CPl010CNt2022002V130LeiauteNFeV400IcmsufDest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da Base de Cálculo do ICMS na UF do destinatário.
     */
    public vBCUFDest?: unknown;
    /**
     * Valor da Base de Cálculo do FCP na UF do destinatário.
     */
    public vBCFCPUFDest?: unknown;
    /**
     * Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza (FCP) naquela UF.
     */
    public pFCPUFDest?: unknown;
    /**
     * Alíquota adotada nas operações internas na UF do destinatário para o produto / mercadoria.
     */
    public pICMSUFDest?: unknown;
    /**
     * Percentual de partilha para a UF do destinatário: - 40% em 2016; - 60% em 2017; - 80% em 2018; - 100% a partir de 2019.
     */
    public pICMSInterPart?: unknown;
    /**
     * Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino.
     */
    public vFCPUFDest?: unknown;
    /**
     * Valor do ICMS de partilha para a UF do destinatário.
     */
    public vICMSUFDest?: unknown;
    /**
     * Valor do ICMS de partilha para a UF do remetente. Nota: A partir de 2019, este valor será zero.
     */
    public vICMSUFRemet?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400IcmsufDest instance.
     * Schema context: Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400IcmsufDest) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400IcmsufDest";


        if (props) {

        	this.vBCUFDest = props.vBCUFDest;
        	this.vBCFCPUFDest = props.vBCFCPUFDest;
        	this.pFCPUFDest = props.pFCPUFDest;
        	this.pICMSUFDest = props.pICMSUFDest;
        	this.pICMSInterPart = props.pICMSInterPart;
        	this.vFCPUFDest = props.vFCPUFDest;
        	this.vICMSUFDest = props.vICMSUFDest;
        	this.vICMSUFRemet = props.vICMSUFRemet;
        }
    }
}
