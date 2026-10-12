import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100EnteGov } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100EnteGov';

/**
 * Tipo Compras Governamentais
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Para administração pública direta e suas autarquias e fundações: 1=União 2=Estados 3=Distrito Federal 4=Municípios
     */
    public tpEnteGov?: TPl010CNt2022002V130DFeTiposBasicosV100EnteGov;
    /**
     * Percentual de redução de aliquota em compra governamental
     */
    public pRedutor?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido instance.
     * Schema context: Tipo Compras Governamentais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido";


        if (props) {

            assignSchemaProperties(this, props, ["tpEnteGov", "pRedutor"]);
        }
    }
}
