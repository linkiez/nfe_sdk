import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100.
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100 instance.
     * Schema context: Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["procEventoNFe"]);
        }
    }
}
