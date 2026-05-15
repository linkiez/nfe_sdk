import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Monofasia
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Monofasia {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de informações da Tributação Monofásica padrão
     */
    public gMonoPadrao?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao;
    /**
     * Grupo de informações da Tributação Monofásica sujeita a retenção
     */
    public gMonoReten?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten;
    /**
     * Grupo de informações da Tributação Monofásica retida anteriormente
     */
    public gMonoRet?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet;
    /**
     * Grupo de informações do diferimento da Tributação Monofásica
     */
    public gMonoDif?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif;
    /**
     * Total de IBS monofásico do item
     */
    public vTotIBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Total da CBS monofásica do item
     */
    public vTotCBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Monofasia instance.
     * Schema context: Tipo Monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Monofasia) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Monofasia";


        if (props) {

        	this.gMonoPadrao = (props.gMonoPadrao) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao(props.gMonoPadrao): undefined;
        	this.gMonoReten = (props.gMonoReten) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten(props.gMonoReten): undefined;
        	this.gMonoRet = (props.gMonoRet) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet(props.gMonoRet): undefined;
        	this.gMonoDif = (props.gMonoDif) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif(props.gMonoDif): undefined;
        	this.vTotIBSMonoItem = props.vTotIBSMonoItem;
        	this.vTotCBSMonoItem = props.vTotCBSMonoItem;
        }
    }
}
