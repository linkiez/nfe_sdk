import { CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento do cancelamento por substituição 110112
     */
    public detEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100 instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento(props.detEvento): undefined;
        }
    }
}
