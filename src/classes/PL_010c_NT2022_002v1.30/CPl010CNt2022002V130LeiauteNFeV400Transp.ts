import { CPl010CNt2022002V130LeiauteNFeV400RetTransp } from './CPl010CNt2022002V130LeiauteNFeV400RetTransp';

import { CPl010CNt2022002V130LeiauteNFeV400Transporta } from './CPl010CNt2022002V130LeiauteNFeV400Transporta';

import { CPl010CNt2022002V130LeiauteNFeV400Vol } from './CPl010CNt2022002V130LeiauteNFeV400Vol';

/**
 * Dados dos transportes da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Transp {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Dados do transportador
     */
    public transporta?: CPl010CNt2022002V130LeiauteNFeV400Transporta;
    /**
     * Dados da retenção ICMS do Transporte
     */
    public retTransp?: CPl010CNt2022002V130LeiauteNFeV400RetTransp;
    /**
     * Dados dos volumes
     */
    public vol?: CPl010CNt2022002V130LeiauteNFeV400Vol;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Transp instance.
     * Schema context: Dados dos transportes da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Transp) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Transp";


        if (props) {

        	this.transporta = (props.transporta) ? new CPl010CNt2022002V130LeiauteNFeV400Transporta(props.transporta): undefined;
        	this.retTransp = (props.retTransp) ? new CPl010CNt2022002V130LeiauteNFeV400RetTransp(props.retTransp): undefined;
        	this.vol = (props.vol) ? new CPl010CNt2022002V130LeiauteNFeV400Vol(props.vol): undefined;
        }
    }
}
