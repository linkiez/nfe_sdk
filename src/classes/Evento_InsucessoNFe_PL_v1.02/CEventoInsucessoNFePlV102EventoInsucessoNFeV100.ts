import { TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento';

/**
 * Runtime class for CEventoInsucessoNFePlV102EventoInsucessoNFeV100.
 */
export class CEventoInsucessoNFePlV102EventoInsucessoNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102EventoInsucessoNFeV100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102EventoInsucessoNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102EventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EventoInsucessoNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
