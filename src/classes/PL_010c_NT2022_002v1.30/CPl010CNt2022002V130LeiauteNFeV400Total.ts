import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400IcmsTot } from './CPl010CNt2022002V130LeiauteNFeV400IcmsTot';

import { CPl010CNt2022002V130LeiauteNFeV400IssqNtot } from './CPl010CNt2022002V130LeiauteNFeV400IssqNtot';

import { CPl010CNt2022002V130LeiauteNFeV400RetTrib } from './CPl010CNt2022002V130LeiauteNFeV400RetTrib';

/**
 * Dados dos totais da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Total {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Totais referentes ao ICMS
     */
    public CPl010CNt2022002V130LeiauteNFeV400IcmsTot?: CPl010CNt2022002V130LeiauteNFeV400IcmsTot;
    /**
     * Totais referentes ao ISSQN
     */
    public CPl010CNt2022002V130LeiauteNFeV400IssqNtot?: CPl010CNt2022002V130LeiauteNFeV400IssqNtot;
    /**
     * Retenção de Tributos Federais
     */
    public retTrib?: CPl010CNt2022002V130LeiauteNFeV400RetTrib;
    /**
     * Valores totais da NF com Imposto Seletivo
     */
    public ISTot?: unknown;
    /**
     * Valores totais da NF com IBS / CBS
     */
    public IBSCBSTot?: unknown;
    /**
     * Valor Total da NF considerando os impostos por fora IBS, CBS e IS
     */
    public vNFTot?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Total instance.
     * Schema context: Dados dos totais da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Total) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Total";


        if (props) {

        	this.CPl010CNt2022002V130LeiauteNFeV400IcmsTot = (props.CPl010CNt2022002V130LeiauteNFeV400IcmsTot) ? new CPl010CNt2022002V130LeiauteNFeV400IcmsTot(props.CPl010CNt2022002V130LeiauteNFeV400IcmsTot): undefined;
        	this.CPl010CNt2022002V130LeiauteNFeV400IssqNtot = (props.CPl010CNt2022002V130LeiauteNFeV400IssqNtot) ? new CPl010CNt2022002V130LeiauteNFeV400IssqNtot(props.CPl010CNt2022002V130LeiauteNFeV400IssqNtot): undefined;
        	this.retTrib = (props.retTrib) ? new CPl010CNt2022002V130LeiauteNFeV400RetTrib(props.retTrib): undefined;
            assignSchemaProperties(this, props, ["ISTot", "IBSCBSTot", "vNFTot"]);
        }
    }
}
