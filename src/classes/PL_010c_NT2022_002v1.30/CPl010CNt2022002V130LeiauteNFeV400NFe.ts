import { CPl010CNt2022002V130LeiauteNFeV400InfNFe } from './CPl010CNt2022002V130LeiauteNFeV400InfNFe';

import { CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl } from './CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl';

/**
 * Tipo Nota Fiscal Eletrônica
 */
export class CPl010CNt2022002V130LeiauteNFeV400NFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Informações da Nota Fiscal eletrônica
     */
    public infNFe?: CPl010CNt2022002V130LeiauteNFeV400InfNFe;
    /**
     * Informações suplementares Nota Fiscal
     */
    public infNFeSupl?: CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400NFe instance.
     * Schema context: Tipo Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400NFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400NFe";


        if (props) {

        	this.unknown = props.unknown;
        	this.infNFe = (props.infNFe) ? new CPl010CNt2022002V130LeiauteNFeV400InfNFe(props.infNFe): undefined;
        	this.infNFeSupl = (props.infNFeSupl) ? new CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl(props.infNFeSupl): undefined;
        }
    }
}
