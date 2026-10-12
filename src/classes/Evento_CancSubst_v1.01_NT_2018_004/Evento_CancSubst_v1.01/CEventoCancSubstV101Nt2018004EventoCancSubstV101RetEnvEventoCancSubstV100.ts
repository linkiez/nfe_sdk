import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100 instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
