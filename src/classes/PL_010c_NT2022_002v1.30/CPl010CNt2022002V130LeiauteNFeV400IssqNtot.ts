/**
 * Totais referentes ao ISSQN
 */
export class CPl010CNt2022002V130LeiauteNFeV400IssqNtot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Total dos Serviços sob não-incidência ou não tributados pelo ICMS
     */
    public vServ?: unknown;
    /**
     * Base de Cálculo do ISS
     */
    public vBC?: unknown;
    /**
     * Valor Total do ISS
     */
    public vISS?: unknown;
    /**
     * Valor do PIS sobre serviços
     */
    public vPIS?: unknown;
    /**
     * Valor do COFINS sobre serviços
     */
    public vCOFINS?: unknown;
    /**
     * Data da prestação do serviço (AAAA-MM-DD)
     */
    public dCompet?: unknown;
    /**
     * Valor dedução para redução da base de cálculo
     */
    public vDeducao?: unknown;
    /**
     * Valor outras retenções
     */
    public vOutro?: unknown;
    /**
     * Valor desconto incondicionado
     */
    public vDescIncond?: unknown;
    /**
     * Valor desconto condicionado
     */
    public vDescCond?: unknown;
    /**
     * Valor Total Retenção ISS
     */
    public vISSRet?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400IssqNtot instance.
     * Schema context: Totais referentes ao ISSQN
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400IssqNtot) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400IssqNtot";


        if (props) {

        	this.vServ = props.vServ;
        	this.vBC = props.vBC;
        	this.vISS = props.vISS;
        	this.vPIS = props.vPIS;
        	this.vCOFINS = props.vCOFINS;
        	this.dCompet = props.dCompet;
        	this.vDeducao = props.vDeducao;
        	this.vOutro = props.vOutro;
        	this.vDescIncond = props.vDescIncond;
        	this.vDescCond = props.vDescCond;
        	this.vISSRet = props.vISSRet;
        }
    }
}
