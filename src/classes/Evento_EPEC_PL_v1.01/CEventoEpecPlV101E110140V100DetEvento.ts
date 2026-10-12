import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecPlV101E110140V100Dest } from './CEventoEpecPlV101E110140V100Dest';

import { TEventoEpecPlV101E110140V100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100COrgaoAutor';

import { TEventoEpecPlV101E110140V100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100DhEmi';

import { TEventoEpecPlV101E110140V100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100VerAplic';

/**
 * Identificador do destinatário, em caso de comprador estrangeiro
 */
export class CEventoEpecPlV101E110140V100DetEvento {
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
    public cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
    /**
     * Schema property tp Autor.
     */
    public tpAutor?: unknown;
    /**
     * Schema property ver Aplic.
     */
    public verAplic?: TEventoEpecPlV101E110140V100VerAplic;
    /**
     * Schema property dh Emi.
     */
    public dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
    /**
     * Schema property tp NF.
     */
    public tpNF?: unknown;
    /**
     * Schema property TEvento Epec Pl V101 E110140 V100 Ie.
     */
    public TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
    /**
     * Identificador do destinatário, em caso de comprador estrangeiro
     */
    public dest?: CEventoEpecPlV101E110140V100Dest;

    /**
     * Creates a new schema-backed CEventoEpecPlV101E110140V100DetEvento instance.
     * Schema context: Identificador do destinatário, em caso de comprador estrangeiro
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101E110140V100DetEvento) {
        this["@class"] = ".CEventoEpecPlV101E110140V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["descEvento", "cOrgaoAutor", "tpAutor", "verAplic", "dhEmi", "tpNF", "TEventoEpecPlV101E110140V100Ie"]);
        	this.dest = (props.dest) ? new CEventoEpecPlV101E110140V100Dest(props.dest): undefined;
        }
    }
}
