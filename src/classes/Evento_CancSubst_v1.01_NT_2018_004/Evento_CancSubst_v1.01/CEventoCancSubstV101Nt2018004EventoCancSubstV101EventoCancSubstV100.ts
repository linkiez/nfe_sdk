import { TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100 instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
