import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from './CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

/**
 * Identificação do Emitente do documento fiscal
 */
export class CPlNfGas100ENfgasTiposBasicoV100Emit {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ do emitente Informar zeros não significativos
     */
    public CNPJ?: unknown;
    /**
     * Inscrição Estadual do emitente
     */
    public IE?: unknown;
    /**
     * Endereço do emitente
     */
    public enderEmit?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Emit instance.
     * Schema context: Identificação do Emitente do documento fiscal
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Emit) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Emit";


        if (props) {

            assignSchemaProperties(this, props, ["CNPJ", "IE"]);
        	this.enderEmit = (props.enderEmit) ? new CPlNfGas100ENfgasTiposBasicoV100EndeEmi(props.enderEmit): undefined;
        }
    }
}
