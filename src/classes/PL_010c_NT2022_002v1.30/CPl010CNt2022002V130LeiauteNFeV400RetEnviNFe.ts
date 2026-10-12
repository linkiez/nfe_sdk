import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from './CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Retorno do Pedido de Autorização da Nota Fiscal Eletrônica
 */
export class CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Lote.
     */
    public verAplic?: unknown;
    /**
     * Código do status da mensagem enviada.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do serviço solicitado.
     */
    public xMotivo?: unknown;
    /**
     * código da UF de atendimento
     */
    public cUF?: unknown;
    /**
     * Data e hora do recebimento, no formato AAAA-MM-DDTHH:MM:SSTZD
     */
    public dhRecbto?: unknown;
    /**
     * Tipo Versão da NF-e - 4.00
     */
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    //choice

    /**
     * Dados do Recibo do Lote
     * @param arg - Branch value assigned to infRec.
     */
    public infRec(arg: unknown) {
        delete((this as any).protNFe);
        (this as any).infRec = arg;
    }

    //choice

    /**
     * Protocolo de status resultado do processamento sincrono da NFC-e
     * @param arg - Branch value assigned to protNFe.
     */
    public protNFe(arg: unknown) {
        delete((this as any).infRec);
        (this as any).protNFe = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe instance.
     * Schema context: Tipo Retorno do Pedido de Autorização da Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cStat", "xMotivo", "cUF", "dhRecbto", "$versao"]);
        }
    }
}
