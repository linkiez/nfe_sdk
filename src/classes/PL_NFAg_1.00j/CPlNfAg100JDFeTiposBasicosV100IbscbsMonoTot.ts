import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from './CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100GEstornoCred } from './CPlNfAg100JDFeTiposBasicosV100GEstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Gibs } from './CPlNfAg100JDFeTiposBasicosV100Gibs';

import { CPlNfAg100JDFeTiposBasicosV100GMono } from './CPlNfAg100JDFeTiposBasicosV100GMono';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS com monofasia
 */
export class CPlNfAg100JDFeTiposBasicosV100IbscbsMonoTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Total Base de Calculo
     */
    public vBCIBSCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Totalização do IBS
     */
    public gIBS?: CPlNfAg100JDFeTiposBasicosV100Gibs;
    /**
     * Totalização da CBS
     */
    public gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
    /**
     * Totais da Monofasia Só deverá ser utilizado para DFe modelos 55 e 65
     */
    public gMono?: CPlNfAg100JDFeTiposBasicosV100GMono;
    /**
     * Totalização do estorno de crédito
     */
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100IbscbsMonoTot instance.
     * Schema context: Grupo de informações de totais da CBS/IBS com monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100IbscbsMonoTot) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100IbscbsMonoTot";


        if (props) {

        	this.vBCIBSCBS = props.vBCIBSCBS;
        	this.gIBS = (props.gIBS) ? new CPlNfAg100JDFeTiposBasicosV100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CPlNfAg100JDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gMono = (props.gMono) ? new CPlNfAg100JDFeTiposBasicosV100GMono(props.gMono): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100GEstornoCred(props.gEstornoCred): undefined;
        }
    }
}
