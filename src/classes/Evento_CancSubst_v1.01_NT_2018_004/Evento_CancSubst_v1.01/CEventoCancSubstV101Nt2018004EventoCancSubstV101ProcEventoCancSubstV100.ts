import { TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100 instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
