import { CPlNfGas100EDFeTiposBasicosV100Cibs } from './CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from './CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação do CTe
 */
export class CPlNfGas100EDFeTiposBasicosV100TribCTe {
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
     * Tipo CBS IBS Completo
     */
    public gIBSCBS?: CPlNfGas100EDFeTiposBasicosV100Cibs;
    /**
     * Informado conforme indicador no cClassTrib
     */
    public gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100TribCTe instance.
     * Schema context: Grupo de informações da Tributação do CTe
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribCTe) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribCTe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gIBSCBS = (props.gIBSCBS) ? new CPlNfGas100EDFeTiposBasicosV100Cibs(props.gIBSCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
