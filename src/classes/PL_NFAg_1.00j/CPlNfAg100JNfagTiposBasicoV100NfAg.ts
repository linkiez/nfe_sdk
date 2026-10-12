import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JNfagTiposBasicoV100InfNfAg } from './CPlNfAg100JNfagTiposBasicoV100InfNfAg';

import { CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl } from './CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl';

/**
 * Tipo Nota Fiscal de Agua
 */
export class CPlNfAg100JNfagTiposBasicoV100NfAg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Informações da NFAg
     */
    public infNFAg?: CPlNfAg100JNfagTiposBasicoV100InfNfAg;
    /**
     * Informações suplementares da NFAg
     */
    public infNFAgSupl?: CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100NfAg instance.
     * Schema context: Tipo Nota Fiscal de Agua
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100NfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100NfAg";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infNFAg = (props.infNFAg) ? new CPlNfAg100JNfagTiposBasicoV100InfNfAg(props.infNFAg): undefined;
        	this.infNFAgSupl = (props.infNFAgSupl) ? new CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl(props.infNFAgSupl): undefined;
        }
    }
}
