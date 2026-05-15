import { TConSitNFeConsSitNFeV201ConsSitNFe } from '../../types/ConSitNFe/TConSitNFeConsSitNFeV201ConsSitNFe';

/**
 * Runtime class for CConSitNFeConsSitNFeV201.
 */
export class CConSitNFeConsSitNFeV201 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property cons Sit NFe.
     */
    public consSitNFe?: TConSitNFeConsSitNFeV201ConsSitNFe;

    /**
     * Creates a new schema-backed CConSitNFeConsSitNFeV201 instance.
     * Schema context: Runtime class for CConSitNFeConsSitNFeV201.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeConsSitNFeV201) {
        this["@class"] = ".CConSitNFeConsSitNFeV201";


        if (props) {

        	this.consSitNFe = props.consSitNFe;
        }
    }
}
