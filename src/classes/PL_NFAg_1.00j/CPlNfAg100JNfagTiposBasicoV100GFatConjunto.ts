import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de Informações do Faturamento conjunto
 */
export class CPlNfAg100JNfagTiposBasicoV100GFatConjunto {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Chave de acesso da NFAg faturada em conjunto Obrigatorio para tpFat 3 Vedado para tpFat 1 e 2
     */
    public chNFAgFat?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GFatConjunto instance.
     * Schema context: Grupo de Informações do Faturamento conjunto
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GFatConjunto) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GFatConjunto";


        if (props) {

            assignSchemaProperties(this, props, ["chNFAgFat"]);
        }
    }
}
