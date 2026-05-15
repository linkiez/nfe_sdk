import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export class CPlNfAg100JNfagTiposBasicoV100EndeEmi {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do município (utilizar a tabela do IBGE)
     */
    public cMun?: unknown;
    /**
     * Sigla da UF
     */
    public UF?: unknown;
    /**
     * Endereço de E-mail
     */
    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100EndeEmi instance.
     * Schema context: Tipo Dados do Endereço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100EndeEmi) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100EndeEmi";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        	this.email = props.email;
        }
    }
}
