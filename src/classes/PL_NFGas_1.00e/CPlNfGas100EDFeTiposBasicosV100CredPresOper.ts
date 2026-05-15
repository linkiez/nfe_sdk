import { CPlNfGas100EDFeTiposBasicosV100CredPres } from './CPlNfGas100EDFeTiposBasicosV100CredPres';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TcCredPres } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcCredPres';

/**
 * Tipo Crédito Presumido da Operação
 */
export class CPlNfGas100EDFeTiposBasicosV100CredPresOper {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da Base de Cálculo do Crédito Presumido da Operação
     */
    public vBCCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Código de Classificação do Crédito Presumido do IBS e da CBS
     */
    public cCredPres?: TPlNfGas100EDFeTiposBasicosV100TcCredPres;
    /**
     * Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento.
     */
    public gIBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;
    /**
     * Grupo de Informações do Crédito Presumido referente a CBS, quando aproveitado pelo emitente do documento.
     */
    public gCBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100CredPresOper instance.
     * Schema context: Tipo Crédito Presumido da Operação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CredPresOper) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CredPresOper";


        if (props) {

        	this.vBCCredPres = props.vBCCredPres;
        	this.cCredPres = props.cCredPres;
        	this.gIBSCredPres = (props.gIBSCredPres) ? new CPlNfGas100EDFeTiposBasicosV100CredPres(props.gIBSCredPres): undefined;
        	this.gCBSCredPres = (props.gCBSCredPres) ? new CPlNfGas100EDFeTiposBasicosV100CredPres(props.gCBSCredPres): undefined;
        }
    }
}
