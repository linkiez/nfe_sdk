import { CPlNfGas100EDFeTiposBasicosV100AjusteCompet } from './CPlNfGas100EDFeTiposBasicosV100AjusteCompet';

import { CPlNfGas100EDFeTiposBasicosV100Cibs } from './CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm } from './CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm';

import { CPlNfGas100EDFeTiposBasicosV100CredPresOper } from './CPlNfGas100EDFeTiposBasicosV100CredPresOper';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from './CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Monofasia } from './CPlNfGas100EDFeTiposBasicosV100Monofasia';

import { CPlNfGas100EDFeTiposBasicosV100TransfCred } from './CPlNfGas100EDFeTiposBasicosV100TransfCred';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFe
 */
export class CPlNfGas100EDFeTiposBasicosV100TribNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código Situação Tributária do IBS/CBS
     */
    public CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
    /**
     * Código de Classificação Tributária do IBS e da CBS
     */
    public cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
    /**
     * Indica se a operação é de doação
     */
    public indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
    /**
     * Informado conforme indicador no cClassTrib
     */
    public gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;

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
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100TribNFe instance.
     * Schema context: Grupo de informações da Tributação da NFe
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribNFe) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribNFe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
