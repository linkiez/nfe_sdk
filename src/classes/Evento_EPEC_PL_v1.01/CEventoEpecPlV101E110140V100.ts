import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecPlV101E110140V100DetEvento } from './CEventoEpecPlV101E110140V100DetEvento';

import { TEventoEpecPlV101E110140V100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100COrgaoAutor';

import { TEventoEpecPlV101E110140V100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100DhEmi';

import { TEventoEpecPlV101E110140V100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Uf';

import { TEventoEpecPlV101E110140V100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100VerAplic';

import { TEventoEpecPlV101E110140V100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vicms';

import { TEventoEpecPlV101E110140V100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vnf';

import { TEventoEpecPlV101E110140V100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vst';

/**
 * Runtime class for CEventoEpecPlV101E110140V100.
 */
export class CEventoEpecPlV101E110140V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ver Aplic.
     */
    public verAplic?: TEventoEpecPlV101E110140V100VerAplic;
    /**
     * Schema property dh Emi.
     */
    public dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
    /**
     * Schema property c Orgao Autor.
     */
    public cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
    /**
     * Schema property i E.
     */
    public iE?: TEventoEpecPlV101E110140V100Ie;
    /**
     * Schema property u F.
     */
    public uF?: TEventoEpecPlV101E110140V100Uf;
    /**
     * Schema property v NF.
     */
    public vNF?: TEventoEpecPlV101E110140V100Vnf;
    /**
     * Schema property v ICMS.
     */
    public vICMS?: TEventoEpecPlV101E110140V100Vicms;
    /**
     * Schema property v ST.
     */
    public vST?: TEventoEpecPlV101E110140V100Vst;
    /**
     * Identificador do destinatário, em caso de comprador estrangeiro
     */
    public detEvento?: CEventoEpecPlV101E110140V100DetEvento;
    /**
     * Schema property desc Evento.
     */
    public descEvento?: unknown;
    /**
     * Schema property tp Autor.
     */
    public tpAutor?: unknown;
    /**
     * Schema property tp NF.
     */
    public tpNF?: unknown;

    /**
     * Creates a new schema-backed CEventoEpecPlV101E110140V100 instance.
     * Schema context: Runtime class for CEventoEpecPlV101E110140V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101E110140V100) {
        this["@class"] = ".CEventoEpecPlV101E110140V100";


        if (props) {

            assignSchemaProperties(this, props, ["verAplic", "dhEmi", "cOrgaoAutor", "iE", "uF", "vNF", "vICMS", "vST"]);
        	this.detEvento = (props.detEvento) ? new CEventoEpecPlV101E110140V100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["descEvento", "tpAutor", "tpNF"]);
        }
    }
}
