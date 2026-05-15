import { CEventoEpecNfCePl100EventoEpecV001Dest } from './CEventoEpecNfCePl100EventoEpecV001Dest';

/**
 * Informações de detalhes do evento
 */
export class CEventoEpecNfCePl100EventoEpecV001DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do Órgão do Autor do Evento.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do aplicativo do Autor do Evento.
     */
    public verAplic?: unknown;
    /**
     * Data e hora no formato UTC (Universal Coordinated Time): "AAAA-MM-DDThh:mm:ss TZD".
     */
    public dhEmi?: unknown;
    /**
     * IE do Emitente
     */
    public IE?: unknown;
    /**
     * Sigla da UF do destinatário.
     */
    public dest?: CEventoEpecNfCePl100EventoEpecV001Dest;
    /**
     * Valor total da NFC-e
     */
    public vNF?: unknown;
    /**
     * Valor total do ICMS
     */
    public vICMS?: unknown;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100EventoEpecV001DetEvento instance.
     * Schema context: Informações de detalhes do evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001DetEvento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.IE = props.IE;
        	this.dest = (props.dest) ? new CEventoEpecNfCePl100EventoEpecV001Dest(props.dest): undefined;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        }
    }
}
