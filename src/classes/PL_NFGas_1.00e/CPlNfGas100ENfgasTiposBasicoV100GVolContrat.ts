import { TPlNfGas100ENfgasTiposBasicoV100GrContrat } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100GrContrat';

/**
 * Grupo de informações das volumes contratados
 */
export class CPlNfGas100ENfgasTiposBasicoV100GVolContrat {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo de volume contratado 1 - Demanda mínima; 2 - Montante de Uso do Sistema de Distribuição; 3 - Encargo de Capacidade; 4 - Volume Contratado
     */
    public tpVolContrat?: TPlNfGas100ENfgasTiposBasicoV100GrContrat;
    /**
     * Quantidade Contratada em m3
     */
    public qUnidContrat?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GVolContrat instance.
     * Schema context: Grupo de informações das volumes contratados
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GVolContrat) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GVolContrat";


        if (props) {

        	this.tpVolContrat = props.tpVolContrat;
        	this.qUnidContrat = props.qUnidContrat;
        }
    }
}
