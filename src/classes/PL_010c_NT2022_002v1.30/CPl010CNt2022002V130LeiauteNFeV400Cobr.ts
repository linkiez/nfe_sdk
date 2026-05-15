import { CPl010CNt2022002V130LeiauteNFeV400Dup } from './CPl010CNt2022002V130LeiauteNFeV400Dup';

import { CPl010CNt2022002V130LeiauteNFeV400Fat } from './CPl010CNt2022002V130LeiauteNFeV400Fat';

/**
 * Dados da cobrança da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Cobr {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Dados da fatura
     */
    public fat?: CPl010CNt2022002V130LeiauteNFeV400Fat;
    /**
     * Dados das duplicatas NT 2011/004
     */
    public dup?: CPl010CNt2022002V130LeiauteNFeV400Dup;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Cobr instance.
     * Schema context: Dados da cobrança da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Cobr) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Cobr";


        if (props) {

        	this.fat = (props.fat) ? new CPl010CNt2022002V130LeiauteNFeV400Fat(props.fat): undefined;
        	this.dup = (props.dup) ? new CPl010CNt2022002V130LeiauteNFeV400Dup(props.dup): undefined;
        }
    }
}
