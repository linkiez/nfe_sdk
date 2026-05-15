import { CPlNfGas100EDFeTiposBasicosV100GMonoDif } from './CPlNfGas100EDFeTiposBasicosV100GMonoDif';

import { CPlNfGas100EDFeTiposBasicosV100GMonoPadrao } from './CPlNfGas100EDFeTiposBasicosV100GMonoPadrao';

import { CPlNfGas100EDFeTiposBasicosV100GMonoRet } from './CPlNfGas100EDFeTiposBasicosV100GMonoRet';

import { CPlNfGas100EDFeTiposBasicosV100GMonoReten } from './CPlNfGas100EDFeTiposBasicosV100GMonoReten';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Monofasia
 */
export class CPlNfGas100EDFeTiposBasicosV100Monofasia {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de informações da Tributação Monofásica padrão
     */
    public gMonoPadrao?: CPlNfGas100EDFeTiposBasicosV100GMonoPadrao;
    /**
     * Grupo de informações da Tributação Monofásica sujeita a retenção
     */
    public gMonoReten?: CPlNfGas100EDFeTiposBasicosV100GMonoReten;
    /**
     * Grupo de informações da Tributação Monofásica retida anteriormente
     */
    public gMonoRet?: CPlNfGas100EDFeTiposBasicosV100GMonoRet;
    /**
     * Grupo de informações do diferimento da Tributação Monofásica
     */
    public gMonoDif?: CPlNfGas100EDFeTiposBasicosV100GMonoDif;
    /**
     * Total de IBS monofásico do item
     */
    public vTotIBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Total da CBS monofásica do item
     */
    public vTotCBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Monofasia instance.
     * Schema context: Tipo Monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Monofasia) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Monofasia";


        if (props) {

        	this.gMonoPadrao = (props.gMonoPadrao) ? new CPlNfGas100EDFeTiposBasicosV100GMonoPadrao(props.gMonoPadrao): undefined;
        	this.gMonoReten = (props.gMonoReten) ? new CPlNfGas100EDFeTiposBasicosV100GMonoReten(props.gMonoReten): undefined;
        	this.gMonoRet = (props.gMonoRet) ? new CPlNfGas100EDFeTiposBasicosV100GMonoRet(props.gMonoRet): undefined;
        	this.gMonoDif = (props.gMonoDif) ? new CPlNfGas100EDFeTiposBasicosV100GMonoDif(props.gMonoDif): undefined;
        	this.vTotIBSMonoItem = props.vTotIBSMonoItem;
        	this.vTotCBSMonoItem = props.vTotCBSMonoItem;
        }
    }
}
