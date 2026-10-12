import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CConSitNFeLeiauteConsSitNFeV201InfProt } from './CConSitNFeLeiauteConsSitNFeV201InfProt';

import { TConSitNFeLeiauteConsSitNFeV201VerNFe } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerNFe';

/**
 * Protocolo de autorização de uso da NF-e
 */
export class CConSitNFeLeiauteConsSitNFeV201ProtNFe {
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
    public infProt?: CConSitNFeLeiauteConsSitNFeV201InfProt;
    /**
     * Tipo Versão da NF-e - 2.00/1.10/1.07
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerNFe;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201ProtNFe instance.
     * Schema context: Protocolo de autorização de uso da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201ProtNFe) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201ProtNFe";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infProt = (props.infProt) ? new CConSitNFeLeiauteConsSitNFeV201InfProt(props.infProt): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
