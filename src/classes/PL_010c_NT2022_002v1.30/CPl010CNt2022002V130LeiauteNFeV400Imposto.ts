import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400Cofinsst } from './CPl010CNt2022002V130LeiauteNFeV400Cofinsst';

import { CPl010CNt2022002V130LeiauteNFeV400IcmsufDest } from './CPl010CNt2022002V130LeiauteNFeV400IcmsufDest';

import { CPl010CNt2022002V130LeiauteNFeV400Pisst } from './CPl010CNt2022002V130LeiauteNFeV400Pisst';

/**
 * Tributos incidentes nos produtos ou serviços da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Imposto {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor estimado total de impostos federais, estaduais e municipais
     */
    public vTotTrib?: unknown;
    /**
     * Dados do PIS Substituição Tributária
     */
    public CPl010CNt2022002V130LeiauteNFeV400Pisst?: CPl010CNt2022002V130LeiauteNFeV400Pisst;
    /**
     * Dados do COFINS da Substituição Tributaria;
     */
    public CPl010CNt2022002V130LeiauteNFeV400Cofinsst?: CPl010CNt2022002V130LeiauteNFeV400Cofinsst;
    /**
     * Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS
     */
    public CPl010CNt2022002V130LeiauteNFeV400IcmsufDest?: CPl010CNt2022002V130LeiauteNFeV400IcmsufDest;
    /**
     * Grupo de informações do Imposto Seletivo
     */
    public IS?: unknown;
    /**
     * Grupo de informações dos tributos IBS, CBS e Imposto Seletivo
     */
    public IBSCBS?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Imposto instance.
     * Schema context: Tributos incidentes nos produtos ou serviços da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Imposto) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Imposto";


        if (props) {

            assignSchemaProperties(this, props, ["vTotTrib"]);
        	this.CPl010CNt2022002V130LeiauteNFeV400Pisst = (props.CPl010CNt2022002V130LeiauteNFeV400Pisst) ? new CPl010CNt2022002V130LeiauteNFeV400Pisst(props.CPl010CNt2022002V130LeiauteNFeV400Pisst): undefined;
        	this.CPl010CNt2022002V130LeiauteNFeV400Cofinsst = (props.CPl010CNt2022002V130LeiauteNFeV400Cofinsst) ? new CPl010CNt2022002V130LeiauteNFeV400Cofinsst(props.CPl010CNt2022002V130LeiauteNFeV400Cofinsst): undefined;
        	this.CPl010CNt2022002V130LeiauteNFeV400IcmsufDest = (props.CPl010CNt2022002V130LeiauteNFeV400IcmsufDest) ? new CPl010CNt2022002V130LeiauteNFeV400IcmsufDest(props.CPl010CNt2022002V130LeiauteNFeV400IcmsufDest): undefined;
            assignSchemaProperties(this, props, ["IS", "IBSCBS"]);
        }
    }
}
