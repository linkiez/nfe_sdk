import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Retenção de Tributos Federais
 */
export class CPl010CNt2022002V130LeiauteNFeV400RetTrib {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Retido de PIS
     */
    public vRetPIS?: unknown;
    /**
     * Valor Retido de COFINS
     */
    public vRetCOFINS?: unknown;
    /**
     * Valor Retido de CSLL
     */
    public vRetCSLL?: unknown;
    /**
     * Base de Cálculo do IRRF
     */
    public vBCIRRF?: unknown;
    /**
     * Valor Retido de IRRF
     */
    public vIRRF?: unknown;
    /**
     * Base de Cálculo da Retenção da Previdêncica Social
     */
    public vBCRetPrev?: unknown;
    /**
     * Valor da Retenção da Previdêncica Social
     */
    public vRetPrev?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400RetTrib instance.
     * Schema context: Retenção de Tributos Federais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetTrib) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetTrib";


        if (props) {

            assignSchemaProperties(this, props, ["vRetPIS", "vRetCOFINS", "vRetCSLL", "vBCIRRF", "vIRRF", "vBCRetPrev", "vRetPrev"]);
        }
    }
}
