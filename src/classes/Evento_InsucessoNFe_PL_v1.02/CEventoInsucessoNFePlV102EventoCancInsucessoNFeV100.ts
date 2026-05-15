import { TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento';

/**
 * Runtime class for CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
