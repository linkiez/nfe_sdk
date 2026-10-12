import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JDFeTiposBasicosV100Cibs } from './CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from './CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Monofasia } from './CPlNfAg100JDFeTiposBasicosV100Monofasia';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFGas
 */
export class CPlNfAg100JDFeTiposBasicosV100TribNfGas {
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
     * Tipo Indicador de Doação
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
        (this as any).gIBSCBS = arg;
    }

    //choice

    /**
     * Informar essa opção da Choice para Monofasia
     * @param arg - Branch value assigned to gIBSCBSMono.
     */
    public gIBSCBSMono(arg: unknown) {
        delete((this as any).gIBSCBS);
        (this as any).gIBSCBSMono = arg;
    }

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100TribNfGas instance.
     * Schema context: Grupo de informações da Tributação da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribNfGas) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribNfGas";


        if (props) {

            assignSchemaProperties(this, props, ["CST", "cClassTrib", "indDoacao"]);
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
