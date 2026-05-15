/**
 * Grupo de Informação do Provedor de Assinatura e Autorização
 */
export class CPlNfAg100JNfagTiposBasicoV100InfPaa {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ do Provedor de Assinatura e Autorização CNPJ da empresa que emitirá a nota do tipo faturamento 1 em nome de outra empresa
     */
    public CNPJPAA?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100InfPaa instance.
     * Schema context: Grupo de Informação do Provedor de Assinatura e Autorização
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100InfPaa) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100InfPaa";


        if (props) {

        	this.CNPJPAA = props.CNPJPAA;
        }
    }
}
