import { CPl010CNt2022002V130LeiauteNFeV400NFe } from './CPl010CNt2022002V130LeiauteNFeV400NFe';

import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from './CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo da NF-e processada
 */
export class CPl010CNt2022002V130LeiauteNFeV400NfeProc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Nota Fiscal Eletrônica
     */
    public NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
    /**
     * Protocolo de status resultado do processamento da NF-e
     */
    public protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
    /**
     * Tipo Versão da NF-e - 4.00
     */
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400NfeProc instance.
     * Schema context: Tipo da NF-e processada
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400NfeProc) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400NfeProc";


        if (props) {

        	this.NFe = (props.NFe) ? new CPl010CNt2022002V130LeiauteNFeV400NFe(props.NFe): undefined;
        	this.protNFe = (props.protNFe) ? new CPl010CNt2022002V130LeiauteNFeV400ProtNFe(props.protNFe): undefined;
        	this.$versao = props.$versao;
        }
    }
}
