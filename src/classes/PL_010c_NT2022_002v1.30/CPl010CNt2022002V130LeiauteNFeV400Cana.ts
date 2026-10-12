import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400Deduc } from './CPl010CNt2022002V130LeiauteNFeV400Deduc';

import { CPl010CNt2022002V130LeiauteNFeV400ForDia } from './CPl010CNt2022002V130LeiauteNFeV400ForDia';

/**
 * Informações de registro aquisições de cana
 */
export class CPl010CNt2022002V130LeiauteNFeV400Cana {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Fornecimentos diários
     */
    public forDia?: CPl010CNt2022002V130LeiauteNFeV400ForDia;
    /**
     * Total do mês
     */
    public qTotMes?: unknown;
    /**
     * Total Anterior
     */
    public qTotAnt?: unknown;
    /**
     * Total Geral
     */
    public qTotGer?: unknown;
    /**
     * Deduções - Taxas e Contribuições
     */
    public deduc?: CPl010CNt2022002V130LeiauteNFeV400Deduc;
    /**
     * Valor dos fornecimentos
     */
    public vFor?: unknown;
    /**
     * Valor Total das Deduções
     */
    public vTotDed?: unknown;
    /**
     * Valor Líquido dos fornecimentos
     */
    public vLiqFor?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Cana instance.
     * Schema context: Informações de registro aquisições de cana
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Cana) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Cana";


        if (props) {

        	this.forDia = (props.forDia) ? new CPl010CNt2022002V130LeiauteNFeV400ForDia(props.forDia): undefined;
            assignSchemaProperties(this, props, ["qTotMes", "qTotAnt", "qTotGer"]);
        	this.deduc = (props.deduc) ? new CPl010CNt2022002V130LeiauteNFeV400Deduc(props.deduc): undefined;
            assignSchemaProperties(this, props, ["vFor", "vTotDed", "vLiqFor"]);
        }
    }
}
