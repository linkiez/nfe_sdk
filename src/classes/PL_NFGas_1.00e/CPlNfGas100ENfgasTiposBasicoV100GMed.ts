import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de informações dos Equipamentos de Medição
 */
export class CPlNfGas100ENfgasTiposBasicoV100GMed {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data da leitura anterior Formato AAAA-MM-DD Em caso da 1a leitura do equipamento, informar a data de instalação do hidrômetro
     */
    public dMedAnt?: unknown;
    /**
     * Valor da medição (leitura) anterior
     */
    public vMedAnt?: unknown;
    /**
     * Data da leitura atual Formato AAAA-MM-DD
     */
    public dMedAtu?: unknown;
    /**
     * Valor da medição (leitura) atual
     */
    public vMedAtu?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GMed instance.
     * Schema context: Grupo de informações dos Equipamentos de Medição
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GMed) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GMed";


        if (props) {

            assignSchemaProperties(this, props, ["dMedAnt", "vMedAnt", "dMedAtu", "vMedAtu"]);
        }
    }
}
