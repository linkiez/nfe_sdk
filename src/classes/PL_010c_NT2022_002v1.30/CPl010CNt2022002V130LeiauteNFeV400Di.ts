import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400Adi } from './CPl010CNt2022002V130LeiauteNFeV400Adi';

/**
 * Declaração de Importação (NT 2011/004)
 */
export class CPl010CNt2022002V130LeiauteNFeV400Di {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data de registro da DI/DSI/DA (AAAA-MM-DD)
     */
    public dDI?: unknown;
    /**
     * UF onde ocorreu o desembaraço aduaneiro
     */
    public UFDesemb?: unknown;
    /**
     * Data do desembaraço aduaneiro (AAAA-MM-DD)
     */
    public dDesemb?: unknown;
    /**
     * Valor Adicional ao frete para renovação de marinha mercante
     */
    public vAFRMM?: unknown;
    /**
     * Sigla da UF do adquirente ou do encomendante
     */
    public UFTerceiro?: unknown;
    /**
     * Adições (NT 2011/004)
     */
    public adi?: CPl010CNt2022002V130LeiauteNFeV400Adi;

    //choice

    /**
     * CNPJ do adquirente ou do encomendante
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF do adquirente ou do encomendante
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Di instance.
     * Schema context: Declaração de Importação (NT 2011/004)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Di) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Di";


        if (props) {

            assignSchemaProperties(this, props, ["dDI", "UFDesemb", "dDesemb", "vAFRMM", "UFTerceiro"]);
        	this.adi = (props.adi) ? new CPl010CNt2022002V130LeiauteNFeV400Adi(props.adi): undefined;
        }
    }
}
