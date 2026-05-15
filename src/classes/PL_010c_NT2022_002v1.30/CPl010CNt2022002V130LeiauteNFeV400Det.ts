import { CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado } from './CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado';

import { CPl010CNt2022002V130LeiauteNFeV400Imposto } from './CPl010CNt2022002V130LeiauteNFeV400Imposto';

import { CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol } from './CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol';

import { CPl010CNt2022002V130LeiauteNFeV400ObsItem } from './CPl010CNt2022002V130LeiauteNFeV400ObsItem';

import { CPl010CNt2022002V130LeiauteNFeV400Prod } from './CPl010CNt2022002V130LeiauteNFeV400Prod';

/**
 * Dados dos detalhes da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Det {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Dados dos produtos e serviços da NF-e
     */
    public prod?: CPl010CNt2022002V130LeiauteNFeV400Prod;
    /**
     * Tributos incidentes nos produtos ou serviços da NF-e
     */
    public imposto?: CPl010CNt2022002V130LeiauteNFeV400Imposto;
    /**
     * Percentual de mercadoria devolvida
     */
    public impostoDevol?: CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol;
    /**
     * Grupo de observações de uso livre (para o item da NF-e)
     */
    public obsItem?: CPl010CNt2022002V130LeiauteNFeV400ObsItem;
    /**
     * Valor total do Item, correspondente à sua participação no total da nota. A soma dos itens deverá corresponder ao total da nota.
     */
    public vItem?: unknown;
    /**
     * Referenciamento de item de outros DFe
     */
    public CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado?: CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Det instance.
     * Schema context: Dados dos detalhes da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Det) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Det";


        if (props) {

        	this.prod = (props.prod) ? new CPl010CNt2022002V130LeiauteNFeV400Prod(props.prod): undefined;
        	this.imposto = (props.imposto) ? new CPl010CNt2022002V130LeiauteNFeV400Imposto(props.imposto): undefined;
        	this.impostoDevol = (props.impostoDevol) ? new CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol(props.impostoDevol): undefined;
        	this.obsItem = (props.obsItem) ? new CPl010CNt2022002V130LeiauteNFeV400ObsItem(props.obsItem): undefined;
        	this.vItem = props.vItem;
        	this.CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado = (props.CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado) ? new CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado(props.CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado): undefined;
        }
    }
}
