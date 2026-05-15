import { CPl010CNt2022002V130DFeTiposBasicosV100CredPres } from './CPl010CNt2022002V130DFeTiposBasicosV100CredPres';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres';

/**
 * Tipo Crédito Presumido da Operação
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da Base de Cálculo do Crédito Presumido da Operação
     */
    public vBCCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Código de Classificação do Crédito Presumido do IBS e da CBS
     */
    public cCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres;
    /**
     * Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento.
     */
    public gIBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;
    /**
     * Grupo de Informações do Crédito Presumido referente a CBS, quando aproveitado pelo emitente do documento.
     */
    public gCBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper instance.
     * Schema context: Tipo Crédito Presumido da Operação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper";


        if (props) {

        	this.vBCCredPres = props.vBCCredPres;
        	this.cCredPres = props.cCredPres;
        	this.gIBSCredPres = (props.gIBSCredPres) ? new CPl010CNt2022002V130DFeTiposBasicosV100CredPres(props.gIBSCredPres): undefined;
        	this.gCBSCredPres = (props.gCBSCredPres) ? new CPl010CNt2022002V130DFeTiposBasicosV100CredPres(props.gCBSCredPres): undefined;
        }
    }
}
