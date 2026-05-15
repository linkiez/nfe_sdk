import { CPlNfGas100ENfgasTiposBasicoV100InfFisco } from './CPlNfGas100ENfgasTiposBasicoV100InfFisco';

import { CPlNfGas100ENfgasTiposBasicoV100InfProt } from './CPlNfGas100ENfgasTiposBasicoV100InfProt';

import { TPlNfGas100ENfgasTiposBasicoV100VerNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100VerNfGas';

/**
 * Reposta ao processamento da NFGas
 */
export class CPlNfGas100ENfgasTiposBasicoV100ProtNfGas {
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
    public infProt?: CPlNfGas100ENfgasTiposBasicoV100InfProt;
    /**
     * Mensagem do Fisco
     */
    public infFisco?: CPlNfGas100ENfgasTiposBasicoV100InfFisco;
    /**
     * Tipo Versão da NFGas
     */
    public $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100ProtNfGas instance.
     * Schema context: Reposta ao processamento da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100ProtNfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100ProtNfGas";


        if (props) {

        	this.unknown = props.unknown;
        	this.infProt = (props.infProt) ? new CPlNfGas100ENfgasTiposBasicoV100InfProt(props.infProt): undefined;
        	this.infFisco = (props.infFisco) ? new CPlNfGas100ENfgasTiposBasicoV100InfFisco(props.infFisco): undefined;
        	this.$versao = props.$versao;
        }
    }
}
