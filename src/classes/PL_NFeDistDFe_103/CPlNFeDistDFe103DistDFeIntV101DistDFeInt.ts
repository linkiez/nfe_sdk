/**
 * Schema de pedido de distribuição de DF-e de interesse
 */
export class CPlNFeDistDFe103DistDFeIntV101DistDFeInt {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Código da UF do Autor
     */
    public cUFAutor?: unknown;

    //choice

    /**
     * CNPJ do interessado no DF-e
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF do interessado no DF-e
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    //choice

    /**
     * Grupo para distribuir DF-e de interesse
     * @param arg - Branch value assigned to distNSU.
     */
    public distNSU(arg: unknown) {
        delete((this as any).consNSU);
        delete((this as any).consChNFe);
        (this as any).distNSU = arg;
    }

    //choice

    /**
     * Grupo para consultar um DF-e a partir de um NSU específico
     * @param arg - Branch value assigned to consNSU.
     */
    public consNSU(arg: unknown) {
        delete((this as any).distNSU);
        delete((this as any).consChNFe);
        (this as any).consNSU = arg;
    }

    //choice

    /**
     * Grupo para consultar uma NF-e a partir da chave de acesso
     * @param arg - Branch value assigned to consChNFe.
     */
    public consChNFe(arg: unknown) {
        delete((this as any).distNSU);
        delete((this as any).consNSU);
        (this as any).consChNFe = arg;
    }

    /**
     * Creates a new schema-backed CPlNFeDistDFe103DistDFeIntV101DistDFeInt instance.
     * Schema context: Schema de pedido de distribuição de DF-e de interesse
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103DistDFeIntV101DistDFeInt) {
        this["@class"] = ".CPlNFeDistDFe103DistDFeIntV101DistDFeInt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.cUFAutor = props.cUFAutor;
        }
    }
}
