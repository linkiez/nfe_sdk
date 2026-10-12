import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from './CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

/**
 * Identificação do destinatário
 */
export class CPlNfGas100ENfgasTiposBasicoV100Dest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Inscrição Estadual do destinatário
     */
    public IE?: unknown;
    /**
     * Endereço do destinatário
     */
    public enderDest?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;

    //choice

    /**
     * Número do CNPJ Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos.
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
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Dest instance.
     * Schema context: Identificação do destinatário
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Dest) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Dest";


        if (props) {

            assignSchemaProperties(this, props, ["IE"]);
        	this.enderDest = (props.enderDest) ? new CPlNfGas100ENfgasTiposBasicoV100EndeEmi(props.enderDest): undefined;
        }
    }
}
