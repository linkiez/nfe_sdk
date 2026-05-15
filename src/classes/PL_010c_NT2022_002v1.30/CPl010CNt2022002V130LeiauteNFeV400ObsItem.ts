import { CPl010CNt2022002V130LeiauteNFeV400ObsCont } from './CPl010CNt2022002V130LeiauteNFeV400ObsCont';

import { CPl010CNt2022002V130LeiauteNFeV400ObsFisco } from './CPl010CNt2022002V130LeiauteNFeV400ObsFisco';

/**
 * Grupo de observações de uso livre (para o item da NF-e)
 */
export class CPl010CNt2022002V130LeiauteNFeV400ObsItem {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de observações de uso livre (para o item da NF-e)
     */
    public obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
    /**
     * Grupo de observações de uso livre (para o item da NF-e)
     */
    public obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400ObsItem instance.
     * Schema context: Grupo de observações de uso livre (para o item da NF-e)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ObsItem) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ObsItem";


        if (props) {

        	this.obsCont = (props.obsCont) ? new CPl010CNt2022002V130LeiauteNFeV400ObsCont(props.obsCont): undefined;
        	this.obsFisco = (props.obsFisco) ? new CPl010CNt2022002V130LeiauteNFeV400ObsFisco(props.obsFisco): undefined;
        }
    }
}
