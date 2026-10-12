import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet } from './CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet';

import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm } from './CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm';

import { CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper } from './CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper';

import { CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Monofasia } from './CPl010CNt2022002V130DFeTiposBasicosV100Monofasia';

import { CPl010CNt2022002V130DFeTiposBasicosV100TransfCred } from './CPl010CNt2022002V130DFeTiposBasicosV100TransfCred';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFe
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100TribNFe {
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
     * Informado conforme indicador no cClassTrib
     */
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;

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
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100TribNFe instance.
     * Schema context: Grupo de informações da Tributação da NFe
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribNFe) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribNFe";


        if (props) {

            assignSchemaProperties(this, props, ["CST", "cClassTrib", "indDoacao"]);
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
