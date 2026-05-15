import { CPl010CNt2022002V130DFeTiposBasicosV100Gcbs } from './CPl010CNt2022002V130DFeTiposBasicosV100Gcbs';

import { CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Gibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Gibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMono } from './CPl010CNt2022002V130DFeTiposBasicosV100GMono';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS com monofasia
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Total Base de Calculo
     */
    public vBCIBSCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Totalização do IBS
     */
    public gIBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gibs;
    /**
     * Totalização da CBS
     */
    public gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
    /**
     * Totais da Monofasia Só deverá ser utilizado para DFe modelos 55 e 65
     */
    public gMono?: CPl010CNt2022002V130DFeTiposBasicosV100GMono;
    /**
     * Totalização do estorno de crédito
     */
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot instance.
     * Schema context: Grupo de informações de totais da CBS/IBS com monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot";


        if (props) {

        	this.vBCIBSCBS = props.vBCIBSCBS;
        	this.gIBS = (props.gIBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gMono = (props.gMono) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMono(props.gMono): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred(props.gEstornoCred): undefined;
        }
    }
}
