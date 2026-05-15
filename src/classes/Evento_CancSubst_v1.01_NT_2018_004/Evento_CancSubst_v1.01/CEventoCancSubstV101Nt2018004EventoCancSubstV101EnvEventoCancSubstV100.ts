import { TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100 instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
