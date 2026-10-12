import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEpecPlV101LeiauteEpecV100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Uf';

import { TEventoEpecPlV101LeiauteEpecV100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vicms';

import { TEventoEpecPlV101LeiauteEpecV100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vnf';

import { TEventoEpecPlV101LeiauteEpecV100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vst';

/**
 * Identificador do destinatário, em caso de comprador estrangeiro
 */
export class CEventoEpecPlV101LeiauteEpecV100Dest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property TEvento Epec Pl V101 Leiaute Epec V100 Uf.
     */
    public TEventoEpecPlV101LeiauteEpecV100Uf?: TEventoEpecPlV101LeiauteEpecV100Uf;
    /**
     * Schema property TEvento Epec Pl V101 Leiaute Epec V100 Ie.
     */
    public TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
    /**
     * Schema property v NF.
     */
    public vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
    /**
     * Schema property v ICMS.
     */
    public vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
    /**
     * Schema property v ST.
     */
    public vST?: TEventoEpecPlV101LeiauteEpecV100Vst;

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
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100Dest instance.
     * Schema context: Identificador do destinatário, em caso de comprador estrangeiro
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100Dest) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100Dest";


        if (props) {

            assignSchemaProperties(this, props, ["TEventoEpecPlV101LeiauteEpecV100Uf", "TEventoEpecPlV101LeiauteEpecV100Ie", "vNF", "vICMS", "vST"]);
        }
    }
}
