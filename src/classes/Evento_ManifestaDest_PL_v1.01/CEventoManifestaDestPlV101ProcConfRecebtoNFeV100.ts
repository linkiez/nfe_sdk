import { TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoManifestaDestPlV101ProcConfRecebtoNFeV100.
 */
export class CEventoManifestaDestPlV101ProcConfRecebtoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101ProcConfRecebtoNFeV100 instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101ProcConfRecebtoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101ProcConfRecebtoNFeV100) {
        this["@class"] = ".CEventoManifestaDestPlV101ProcConfRecebtoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
