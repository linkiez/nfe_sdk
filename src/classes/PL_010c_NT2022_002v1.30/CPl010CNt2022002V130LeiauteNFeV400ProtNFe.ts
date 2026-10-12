import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400InfProt } from './CPl010CNt2022002V130LeiauteNFeV400InfProt';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Protocolo de status resultado do processamento da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400ProtNFe {
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
    public infProt?: CPl010CNt2022002V130LeiauteNFeV400InfProt;
    /**
     * Tipo Versão da NF-e - 4.00
     */
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400ProtNFe instance.
     * Schema context: Protocolo de status resultado do processamento da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ProtNFe";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infProt = (props.infProt) ? new CPl010CNt2022002V130LeiauteNFeV400InfProt(props.infProt): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
