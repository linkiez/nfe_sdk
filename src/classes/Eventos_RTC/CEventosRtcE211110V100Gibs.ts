/**
 * Runtime class for CEventosRtcE211110V100Gibs.
 */
export class CEventosRtcE211110V100Gibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property p Cred Pres.
     */
    public pCredPres?: unknown;
    /**
     * Schema property v Cred Pres.
     */
    public vCredPres?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211110V100Gibs instance.
     * Schema context: Runtime class for CEventosRtcE211110V100Gibs.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211110V100Gibs) {
        this["@class"] = ".CEventosRtcE211110V100Gibs";


        if (props) {

        	this.pCredPres = props.pCredPres;
        	this.vCredPres = props.vCredPres;
        }
    }
}
