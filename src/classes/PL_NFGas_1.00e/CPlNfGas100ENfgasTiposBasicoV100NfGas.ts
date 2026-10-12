import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100ENfgasTiposBasicoV100InfNfGas } from './CPlNfGas100ENfgasTiposBasicoV100InfNfGas';

import { CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl } from './CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl';

/**
 * Tipo Nota Fiscal de Gas
 */
export class CPlNfGas100ENfgasTiposBasicoV100NfGas {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Informações da NFGas
     */
    public infNFGas?: CPlNfGas100ENfgasTiposBasicoV100InfNfGas;
    /**
     * Informações suplementares da NFGas
     */
    public infNFGasSupl?: CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100NfGas instance.
     * Schema context: Tipo Nota Fiscal de Gas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100NfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100NfGas";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infNFGas = (props.infNFGas) ? new CPlNfGas100ENfgasTiposBasicoV100InfNfGas(props.infNFGas): undefined;
        	this.infNFGasSupl = (props.infNFGasSupl) ? new CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl(props.infNFGasSupl): undefined;
        }
    }
}
