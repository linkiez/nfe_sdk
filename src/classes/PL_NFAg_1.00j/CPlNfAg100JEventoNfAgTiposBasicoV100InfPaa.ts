/**
 * Grupo de Informação do Provedor de Assinatura e Autorização
 */
export class CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ da empresa que emitirá evento em nome de outra no caso do faturamento conjunto
     */
    public CNPJPAA?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa instance.
     * Schema context: Grupo de Informação do Provedor de Assinatura e Autorização
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa";


        if (props) {

        	this.CNPJPAA = props.CNPJPAA;
        }
    }
}
