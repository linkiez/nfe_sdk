import { TPl010CNt2022002V130NfeV400NFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130NfeV400NFe';

/**
 * Runtime class for CPl010CNt2022002V130NfeV400.
 */
export class CPl010CNt2022002V130NfeV400 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property n Fe.
     */
    public nFe?: TPl010CNt2022002V130NfeV400NFe;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130NfeV400 instance.
     * Schema context: Runtime class for CPl010CNt2022002V130NfeV400.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130NfeV400) {
        this["@class"] = ".CPl010CNt2022002V130NfeV400";


        if (props) {

        	this.nFe = props.nFe;
        }
    }
}
