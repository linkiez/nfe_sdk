import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from './CPlNfAg100JNfagTiposBasicoV100EndeEmi';

/**
 * Identificação do Emitente do documento fiscal
 */
export class CPlNfAg100JNfagTiposBasicoV100Emit {
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
    public enderEmit?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Emit instance.
     * Schema context: Identificação do Emitente do documento fiscal
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Emit) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Emit";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.IE = props.IE;
        	this.enderEmit = (props.enderEmit) ? new CPlNfAg100JNfagTiposBasicoV100EndeEmi(props.enderEmit): undefined;
        }
    }
}
