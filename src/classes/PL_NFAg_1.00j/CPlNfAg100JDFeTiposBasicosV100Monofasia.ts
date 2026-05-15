import { CPlNfAg100JDFeTiposBasicosV100GMonoDif } from './CPlNfAg100JDFeTiposBasicosV100GMonoDif';

import { CPlNfAg100JDFeTiposBasicosV100GMonoPadrao } from './CPlNfAg100JDFeTiposBasicosV100GMonoPadrao';

import { CPlNfAg100JDFeTiposBasicosV100GMonoRet } from './CPlNfAg100JDFeTiposBasicosV100GMonoRet';

import { CPlNfAg100JDFeTiposBasicosV100GMonoReten } from './CPlNfAg100JDFeTiposBasicosV100GMonoReten';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Monofasia
 */
export class CPlNfAg100JDFeTiposBasicosV100Monofasia {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de informações da Tributação Monofásica padrão
     */
    public gMonoPadrao?: CPlNfAg100JDFeTiposBasicosV100GMonoPadrao;
    /**
     * Grupo de informações da Tributação Monofásica sujeita a retenção
     */
    public gMonoReten?: CPlNfAg100JDFeTiposBasicosV100GMonoReten;
    /**
     * Grupo de informações da Tributação Monofásica retida anteriormente
     */
    public gMonoRet?: CPlNfAg100JDFeTiposBasicosV100GMonoRet;
    /**
     * Grupo de informações do diferimento da Tributação Monofásica
     */
    public gMonoDif?: CPlNfAg100JDFeTiposBasicosV100GMonoDif;
    /**
     * Total de IBS monofásico do item
     */
    public vTotIBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Total da CBS monofásica do item
     */
    public vTotCBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Monofasia instance.
     * Schema context: Tipo Monofasia
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Monofasia) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Monofasia";


        if (props) {

        	this.gMonoPadrao = (props.gMonoPadrao) ? new CPlNfAg100JDFeTiposBasicosV100GMonoPadrao(props.gMonoPadrao): undefined;
        	this.gMonoReten = (props.gMonoReten) ? new CPlNfAg100JDFeTiposBasicosV100GMonoReten(props.gMonoReten): undefined;
        	this.gMonoRet = (props.gMonoRet) ? new CPlNfAg100JDFeTiposBasicosV100GMonoRet(props.gMonoRet): undefined;
        	this.gMonoDif = (props.gMonoDif) ? new CPlNfAg100JDFeTiposBasicosV100GMonoDif(props.gMonoDif): undefined;
        	this.vTotIBSMonoItem = props.vTotIBSMonoItem;
        	this.vTotCBSMonoItem = props.vTotCBSMonoItem;
        }
    }
}
