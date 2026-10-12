import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas
 */
export class CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Número do Recibo
     */
    public nRec?: unknown;
    /**
     * Tipo Versão da NF-e - 4.00
     */
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe instance.
     * Schema context: Tipo Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "nRec", "$versao"]);
        }
    }
}
