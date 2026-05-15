import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from './CPlNfAg100JNfagTiposBasicoV100EndeEmi';

/**
 * Identificação do destinatário
 */
export class CPlNfAg100JNfagTiposBasicoV100Dest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Inscrição Estadual do destinatário
     */
    public IE?: unknown;
    /**
     * Endereço do destinatário / acessante
     */
    public enderDest?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;

    //choice

    /**
     * Número do CNPJ Informar os zeros não significativos.
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * Número do CPF Informar os zeros não significativos.
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Dest instance.
     * Schema context: Identificação do destinatário
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Dest) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Dest";


        if (props) {

        	this.IE = props.IE;
        	this.enderDest = (props.enderDest) ? new CPlNfAg100JNfagTiposBasicoV100EndeEmi(props.enderDest): undefined;
        }
    }
}
