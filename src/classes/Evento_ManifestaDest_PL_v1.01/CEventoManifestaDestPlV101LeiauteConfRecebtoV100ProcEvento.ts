import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento';

import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
