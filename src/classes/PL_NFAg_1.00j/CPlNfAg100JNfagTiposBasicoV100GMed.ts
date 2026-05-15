/**
 * Grupo de informações dos Medidores
 */
export class CPlNfAg100JNfagTiposBasicoV100GMed {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data da leitura anterior Formato AAAA-MM-DD Em caso da 1a leitura do hidrometro, informar a data de instalação do hidrômetro
     */
    public dMedAnt?: unknown;
    /**
     * Data da leitura atual Formato AAAA-MM-DD
     */
    public dMedAtu?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GMed instance.
     * Schema context: Grupo de informações dos Medidores
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GMed) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GMed";


        if (props) {

        	this.dMedAnt = props.dMedAnt;
        	this.dMedAtu = props.dMedAtu;
        }
    }
}
