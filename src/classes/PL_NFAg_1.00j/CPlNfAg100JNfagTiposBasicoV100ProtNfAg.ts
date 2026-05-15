import { CPlNfAg100JNfagTiposBasicoV100InfFisco } from './CPlNfAg100JNfagTiposBasicoV100InfFisco';

import { CPlNfAg100JNfagTiposBasicoV100InfProt } from './CPlNfAg100JNfagTiposBasicoV100InfProt';

import { TPlNfAg100JNfagTiposBasicoV100VerNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100VerNfAg';

/**
 * Reposta ao processamento da NFAg
 */
export class CPlNfAg100JNfagTiposBasicoV100ProtNfAg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Dados do protocolo de status
     */
    public infProt?: CPlNfAg100JNfagTiposBasicoV100InfProt;
    /**
     * Mensagem do Fisco
     */
    public infFisco?: CPlNfAg100JNfagTiposBasicoV100InfFisco;
    /**
     * Tipo Versão da NFAg
     */
    public $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100ProtNfAg instance.
     * Schema context: Reposta ao processamento da NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100ProtNfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100ProtNfAg";


        if (props) {

        	this.unknown = props.unknown;
        	this.infProt = (props.infProt) ? new CPlNfAg100JNfagTiposBasicoV100InfProt(props.infProt): undefined;
        	this.infFisco = (props.infFisco) ? new CPlNfAg100JNfagTiposBasicoV100InfFisco(props.infFisco): undefined;
        	this.$versao = props.$versao;
        }
    }
}
