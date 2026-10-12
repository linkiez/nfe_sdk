import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg.
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property n Form Seg.
     */
    public nFormSeg?: unknown;
    /**
     * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Dest.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest;
    /**
     * Schema property tp Emis.
     */
    public tpEmis?: unknown;
    /**
     * Schema property v Total NFe.
     */
    public vTotalNFe?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe;
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
    public diaEmi?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi;

    //choice

    /**
     * Selects the tevento suframa internaliza pl v101 leiaute suframa internaliza v100 cnpj dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest = arg;
    }

    //choice

    /**
     * Selects the tevento suframa internaliza pl v101 leiaute suframa internaliza v100 cpf dest branch for this schema choice.
     * @param arg - Branch value assigned to TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg";


        if (props) {

            assignSchemaProperties(this, props, ["nFormSeg", "TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest", "tpEmis", "vTotalNFe", "indICMS", "indICMSST", "diaEmi"]);
        }
    }
}
