import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211110V100Gcbs } from './CEventosRtcE211110V100Gcbs';

import { CEventosRtcE211110V100Gibs } from './CEventosRtcE211110V100Gibs';

/**
 * Informações de crédito presumido por item
 */
export class CEventosRtcE211110V100GCredPres {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do base de cálculo do item
     */
    public vBC?: unknown;
    /**
     * Schema property g IBS.
     */
    public gIBS?: CEventosRtcE211110V100Gibs;
    /**
     * Schema property g CBS.
     */
    public gCBS?: CEventosRtcE211110V100Gcbs;

    /**
     * Creates a new schema-backed CEventosRtcE211110V100GCredPres instance.
     * Schema context: Informações de crédito presumido por item
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211110V100GCredPres) {
        this["@class"] = ".CEventosRtcE211110V100GCredPres";


        if (props) {

            assignSchemaProperties(this, props, ["vBC"]);
        	this.gIBS = (props.gIBS) ? new CEventosRtcE211110V100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CEventosRtcE211110V100Gcbs(props.gCBS): undefined;
        }
    }
}
