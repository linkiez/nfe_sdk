import { CPlNfGas100EDFeTiposBasicosV100Cibs } from './CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from './CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Monofasia } from './CPlNfGas100EDFeTiposBasicosV100Monofasia';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFGas
 */
export class CPlNfGas100EDFeTiposBasicosV100TribNfGas {
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
     * Tipo Indicador de Doação
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
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100TribNfGas instance.
     * Schema context: Grupo de informações da Tributação da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribNfGas) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribNfGas";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
