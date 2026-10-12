import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JNfagTiposBasicoV100GProc } from './CPlNfAg100JNfagTiposBasicoV100GProc';

/**
 * Grupo Processo referenciado
 */
export class CPlNfAg100JNfagTiposBasicoV100GProcRef {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor unitário do item Informar o valor sem a influência da decisão judicial/administrativa.
     */
    public vItem?: unknown;
    /**
     * Quantidade Faturada Informar a quantidade de comercialização do produto .
     */
    public qFaturada?: unknown;
    /**
     * Valor total do item
     */
    public vProd?: unknown;
    /**
     * Grupo identificador do Processo
     */
    public gProc?: CPlNfAg100JNfagTiposBasicoV100GProc;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GProcRef instance.
     * Schema context: Grupo Processo referenciado
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GProcRef) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GProcRef";


        if (props) {

            assignSchemaProperties(this, props, ["vItem", "qFaturada", "vProd"]);
        	this.gProc = (props.gProc) ? new CPlNfAg100JNfagTiposBasicoV100GProc(props.gProc): undefined;
        }
    }
}
