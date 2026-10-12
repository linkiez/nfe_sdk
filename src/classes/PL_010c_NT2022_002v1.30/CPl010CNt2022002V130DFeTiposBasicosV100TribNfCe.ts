import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100Monofasia } from './CPl010CNt2022002V130DFeTiposBasicosV100Monofasia';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFCe
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100TribNfCe {
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

    //choice

    /**
     * Selects the g ibscbs branch for this schema choice.
     * @param arg - Branch value assigned to gIBSCBS.
     */
    public gIBSCBS(arg: unknown) {
        delete((this as any).gIBSCBSMono);
        (this as any).gIBSCBS = arg;
    }

    //choice

    /**
     * Selects the g ibscbsmono branch for this schema choice.
     * @param arg - Branch value assigned to gIBSCBSMono.
     */
    public gIBSCBSMono(arg: unknown) {
        delete((this as any).gIBSCBS);
        (this as any).gIBSCBSMono = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100TribNfCe instance.
     * Schema context: Grupo de informações da Tributação da NFCe
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribNfCe) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribNfCe";


        if (props) {

            assignSchemaProperties(this, props, ["CST", "cClassTrib", "indDoacao"]);
        }
    }
}
