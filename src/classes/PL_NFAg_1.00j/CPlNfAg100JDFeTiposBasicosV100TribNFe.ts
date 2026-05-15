import { CPlNfAg100JDFeTiposBasicosV100AjusteCompet } from './CPlNfAg100JDFeTiposBasicosV100AjusteCompet';

import { CPlNfAg100JDFeTiposBasicosV100Cibs } from './CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm } from './CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm';

import { CPlNfAg100JDFeTiposBasicosV100CredPresOper } from './CPlNfAg100JDFeTiposBasicosV100CredPresOper';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from './CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Monofasia } from './CPlNfAg100JDFeTiposBasicosV100Monofasia';

import { CPlNfAg100JDFeTiposBasicosV100TransfCred } from './CPlNfAg100JDFeTiposBasicosV100TransfCred';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFe
 */
export class CPlNfAg100JDFeTiposBasicosV100TribNFe {
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
     * Informado conforme indicador no cClassTrib
     */
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;

    //choice

    /**
     * Selects the g ibscbs branch for this schema choice.
     * @param arg - Branch value assigned to gIBSCBS.
     */
    public gIBSCBS(arg: unknown) {
        delete((this as any).gIBSCBSMono);
        delete((this as any).gTransfCred);
        delete((this as any).gAjusteCompet);
        (this as any).gIBSCBS = arg;
    }

    //choice

    /**
     * Informar essa opção da Choice para Monofasia (CST 620)
     * @param arg - Branch value assigned to gIBSCBSMono.
     */
    public gIBSCBSMono(arg: unknown) {
        delete((this as any).gIBSCBS);
        delete((this as any).gTransfCred);
        delete((this as any).gAjusteCompet);
        (this as any).gIBSCBSMono = arg;
    }

    //choice

    /**
     * Informar essa opção da Choice para o CST 800
     * @param arg - Branch value assigned to gTransfCred.
     */
    public gTransfCred(arg: unknown) {
        delete((this as any).gIBSCBS);
        delete((this as any).gIBSCBSMono);
        delete((this as any).gAjusteCompet);
        (this as any).gTransfCred = arg;
    }

    //choice

    /**
     * Informar essa opção da Choice para o CST 811
     * @param arg - Branch value assigned to gAjusteCompet.
     */
    public gAjusteCompet(arg: unknown) {
        delete((this as any).gIBSCBS);
        delete((this as any).gIBSCBSMono);
        delete((this as any).gTransfCred);
        (this as any).gAjusteCompet = arg;
    }

    //choice

    /**
     * Crédito Presumido da Operação. Informado conforme indicador no cClassTrib.
     * @param arg - Branch value assigned to gCredPresOper.
     */
    public gCredPresOper(arg: unknown) {
        delete((this as any).gCredPresIBSZFM);
        (this as any).gCredPresOper = arg;
    }

    //choice

    /**
     * Classificação de acordo com o art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido na ZFM. Informado conforme indicador no cClassTrib.
     * @param arg - Branch value assigned to gCredPresIBSZFM.
     */
    public gCredPresIBSZFM(arg: unknown) {
        delete((this as any).gCredPresOper);
        (this as any).gCredPresIBSZFM = arg;
    }

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100TribNFe instance.
     * Schema context: Grupo de informações da Tributação da NFe
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribNFe) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribNFe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
