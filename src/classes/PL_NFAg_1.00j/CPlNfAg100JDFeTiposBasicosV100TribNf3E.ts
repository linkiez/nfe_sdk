import { CPlNfAg100JDFeTiposBasicosV100Cibs } from './CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from './CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NF3e
 */
export class CPlNfAg100JDFeTiposBasicosV100TribNf3E {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código Situação Tributária do IBS/CBS
     */
    public CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
    /**
     * Código de Classificação Tributária do IBS e da CBS
     */
    public cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
    /**
     * Indica se a operação é de doação
     */
    public indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
    /**
     * Tipo CBS IBS Completo
     */
    public gIBSCBS?: CPlNfAg100JDFeTiposBasicosV100Cibs;
    /**
     * Informado conforme indicador no cClassTrib
     */
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100TribNf3E instance.
     * Schema context: Grupo de informações da Tributação da NF3e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribNf3E) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribNf3E";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gIBSCBS = (props.gIBSCBS) ? new CPlNfAg100JDFeTiposBasicosV100Cibs(props.gIBSCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
