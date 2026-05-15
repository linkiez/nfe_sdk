import { CEventoEpecPlV101LeiauteEpecV100Dest } from './CEventoEpecPlV101LeiauteEpecV100Dest';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100DhEmi';

import { TEventoEpecPlV101LeiauteEpecV100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerAplic';

/**
 * Schema XML de validação do evento de emissão prévia em contingência - 110140
 */
export class CEventoEpecPlV101LeiauteEpecV100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property desc Evento.
     */
    public descEvento?: unknown;
    /**
     * Schema property c Orgao Autor.
     */
    public cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
    /**
     * Schema property tp Autor.
     */
    public tpAutor?: unknown;
    /**
     * Schema property ver Aplic.
     */
    public verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
    /**
     * Schema property dh Emi.
     */
    public dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
    /**
     * Schema property tp NF.
     */
    public tpNF?: unknown;
    /**
     * Schema property TEvento Epec Pl V101 Leiaute Epec V100 Ie.
     */
    public TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
    /**
     * Identificador do destinatário, em caso de comprador estrangeiro
     */
    public dest?: CEventoEpecPlV101LeiauteEpecV100Dest;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100DetEvento instance.
     * Schema context: Schema XML de validação do evento de emissão prévia em contingência - 110140
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100DetEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100DetEvento";


        if (props) {

        	this.descEvento = props.descEvento;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.tpAutor = props.tpAutor;
        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.tpNF = props.tpNF;
        	this.TEventoEpecPlV101LeiauteEpecV100Ie = props.TEventoEpecPlV101LeiauteEpecV100Ie;
        	this.dest = (props.dest) ? new CEventoEpecPlV101LeiauteEpecV100Dest(props.dest): undefined;
        }
    }
}
