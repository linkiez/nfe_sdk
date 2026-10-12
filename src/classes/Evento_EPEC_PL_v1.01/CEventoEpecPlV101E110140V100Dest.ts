import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEpecPlV101E110140V100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Uf';

import { TEventoEpecPlV101E110140V100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vicms';

import { TEventoEpecPlV101E110140V100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vnf';

import { TEventoEpecPlV101E110140V100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vst';

/**
 * Identificador do destinatário, em caso de comprador estrangeiro
 */
export class CEventoEpecPlV101E110140V100Dest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property TEvento Epec Pl V101 E110140 V100 Uf.
     */
    public TEventoEpecPlV101E110140V100Uf?: TEventoEpecPlV101E110140V100Uf;
    /**
     * Schema property TEvento Epec Pl V101 E110140 V100 Ie.
     */
    public TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
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

    //choice

    /**
     * Selects the cnpj branch for this schema choice.
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * Selects the cpf branch for this schema choice.
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CEventoEpecPlV101E110140V100Dest instance.
     * Schema context: Identificador do destinatário, em caso de comprador estrangeiro
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101E110140V100Dest) {
        this["@class"] = ".CEventoEpecPlV101E110140V100Dest";


        if (props) {

            assignSchemaProperties(this, props, ["TEventoEpecPlV101E110140V100Uf", "TEventoEpecPlV101E110140V100Ie", "vNF", "vICMS", "vST"]);
        }
    }
}
