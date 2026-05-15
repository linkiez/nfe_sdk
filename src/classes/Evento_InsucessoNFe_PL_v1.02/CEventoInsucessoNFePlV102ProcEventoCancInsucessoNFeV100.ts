import { TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe';

/**
 * Runtime class for CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
