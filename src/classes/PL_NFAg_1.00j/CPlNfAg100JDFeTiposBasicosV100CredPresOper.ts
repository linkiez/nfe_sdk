import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JDFeTiposBasicosV100CredPres } from './CPlNfAg100JDFeTiposBasicosV100CredPres';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TcCredPres } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcCredPres';

/**
 * Tipo Crédito Presumido da Operação
 */
export class CPlNfAg100JDFeTiposBasicosV100CredPresOper {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da Base de Cálculo do Crédito Presumido da Operação
     */
    public vBCCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Código de Classificação do Crédito Presumido do IBS e da CBS
     */
    public cCredPres?: TPlNfAg100JDFeTiposBasicosV100TcCredPres;
    /**
     * Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento.
     */
    public gIBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;
    /**
     * Grupo de Informações do Crédito Presumido referente a CBS, quando aproveitado pelo emitente do documento.
     */
    public gCBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100CredPresOper instance.
     * Schema context: Tipo Crédito Presumido da Operação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100CredPresOper) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100CredPresOper";


        if (props) {

            assignSchemaProperties(this, props, ["vBCCredPres", "cCredPres"]);
        	this.gIBSCredPres = (props.gIBSCredPres) ? new CPlNfAg100JDFeTiposBasicosV100CredPres(props.gIBSCredPres): undefined;
        	this.gCBSCredPres = (props.gCBSCredPres) ? new CPlNfAg100JDFeTiposBasicosV100CredPres(props.gCBSCredPres): undefined;
        }
    }
}
