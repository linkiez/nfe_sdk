import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados da Empresa de Software
 */
export class CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Email da pessoa jurídica/física a ser contatada
     */
    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

    //choice

    /**
     * CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF da pessoa física desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico No caso de pessoa física, informar o CPF do desenvolvedor do sistema utilizado na emissão do documento fiscal eletrônico.
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft instance.
     * Schema context: Tipo Dados da Empresa de Software
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft";


        if (props) {

            assignSchemaProperties(this, props, ["email"]);
        }
    }
}
