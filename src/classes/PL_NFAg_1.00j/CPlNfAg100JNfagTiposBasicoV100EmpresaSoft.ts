import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados da Empresa de Software
 */
export class CPlNfAg100JNfagTiposBasicoV100EmpresaSoft {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Email da pessoa jurídica/física a ser contatada
     */
    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

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
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100EmpresaSoft instance.
     * Schema context: Tipo Dados da Empresa de Software
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100EmpresaSoft) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100EmpresaSoft";


        if (props) {

        	this.email = props.email;
        }
    }
}
