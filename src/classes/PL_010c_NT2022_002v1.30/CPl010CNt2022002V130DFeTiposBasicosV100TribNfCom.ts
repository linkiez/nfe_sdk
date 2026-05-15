import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFCom
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100TribNfCom {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código Situação Tributária do IBS/CBS
     */
    public CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    /**
     * Código de Classificação Tributária do IBS e da CBS
     */
    public cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
    /**
     * Indica se a operação é de doação
     */
    public indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
    /**
     * Tipo CBS IBS Completo
     */
    public gIBSCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Cibs;
    /**
     * Informado conforme indicador no cClassTrib
     */
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100TribNfCom instance.
     * Schema context: Grupo de informações da Tributação da NFCom
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribNfCom) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribNfCom";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gIBSCBS = (props.gIBSCBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Cibs(props.gIBSCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
