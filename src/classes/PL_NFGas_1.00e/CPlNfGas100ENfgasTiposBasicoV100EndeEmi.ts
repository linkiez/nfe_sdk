import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export class CPlNfGas100ENfgasTiposBasicoV100EndeEmi {
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
    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100EndeEmi instance.
     * Schema context: Tipo Dados do Endereço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100EndeEmi";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        	this.email = props.email;
        }
    }
}
