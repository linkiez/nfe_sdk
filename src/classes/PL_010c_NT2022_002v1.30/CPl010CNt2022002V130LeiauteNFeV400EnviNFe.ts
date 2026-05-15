import { CPl010CNt2022002V130LeiauteNFeV400NFe } from './CPl010CNt2022002V130LeiauteNFeV400NFe';

import { TPl010CNt2022002V130LeiauteNFeV400IdLote } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400IdLote';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Pedido de Concessão de Autorização da Nota Fiscal Eletrônica
 */
export class CPl010CNt2022002V130LeiauteNFeV400EnviNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Identificação de Lote
     */
    public idLote?: TPl010CNt2022002V130LeiauteNFeV400IdLote;
    /**
     * Tipo Nota Fiscal Eletrônica
     */
    public NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
    /**
     * Tipo Versão da NF-e - 4.00
     */
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400EnviNFe instance.
     * Schema context: Tipo Pedido de Concessão de Autorização da Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400EnviNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400EnviNFe";


        if (props) {

        	this.idLote = props.idLote;
        	this.NFe = (props.NFe) ? new CPl010CNt2022002V130LeiauteNFeV400NFe(props.NFe): undefined;
        	this.$versao = props.$versao;
        }
    }
}
