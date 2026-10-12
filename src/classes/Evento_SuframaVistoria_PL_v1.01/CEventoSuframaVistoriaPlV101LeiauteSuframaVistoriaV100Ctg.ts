import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg.
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property n Form Seg.
     */
    public nFormSeg?: unknown;
    /**
     * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Dest.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest;
    /**
     * Schema property tp Emis.
     */
    public tpEmis?: unknown;
    /**
     * Schema property v Total NFe.
     */
    public vTotalNFe?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe;
    /**
     * Schema property ind ICMS.
     */
    public indICMS?: unknown;
    /**
     * Schema property ind ICMSST.
     */
    public indICMSST?: unknown;
    /**
     * Schema property dia Emi.
     */
    public diaEmi?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi;

    //choice

    /**
     * Selects the tevento suframa vistoria pl v101 leiaute suframa vistoria v100 cnpj dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest = arg;
    }

    //choice

    /**
     * Selects the tevento suframa vistoria pl v101 leiaute suframa vistoria v100 cpf dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg";


        if (props) {

            assignSchemaProperties(this, props, ["nFormSeg", "TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest", "tpEmis", "vTotalNFe", "indICMS", "indICMSST", "diaEmi"]);
        }
    }
}
