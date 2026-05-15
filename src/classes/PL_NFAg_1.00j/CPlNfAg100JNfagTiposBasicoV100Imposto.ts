import { CPlNfAg100JNfagTiposBasicoV100Cofins } from './CPlNfAg100JNfagTiposBasicoV100Cofins';

import { CPlNfAg100JNfagTiposBasicoV100Fs } from './CPlNfAg100JNfagTiposBasicoV100Fs';

import { CPlNfAg100JNfagTiposBasicoV100Fu } from './CPlNfAg100JNfagTiposBasicoV100Fu';

import { CPlNfAg100JNfagTiposBasicoV100Pis } from './CPlNfAg100JNfagTiposBasicoV100Pis';

import { CPlNfAg100JNfagTiposBasicoV100RetTrib } from './CPlNfAg100JNfagTiposBasicoV100RetTrib';

/**
 * Tributos incidentes no Produto ou Serviço
 */
export class CPlNfAg100JNfagTiposBasicoV100Imposto {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de informações do IBS e CBS
     */
    public IBSCBS?: unknown;
    /**
     * Dados do PIS
     */
    public CPlNfAg100JNfagTiposBasicoV100Pis?: CPlNfAg100JNfagTiposBasicoV100Pis;
    /**
     * Dados do COFINS
     */
    public CPlNfAg100JNfagTiposBasicoV100Cofins?: CPlNfAg100JNfagTiposBasicoV100Cofins;
    /**
     * Grupo de informações de retenção de tributos federais
     */
    public retTrib?: CPlNfAg100JNfagTiposBasicoV100RetTrib;
    /**
     * Taxa de Fiscalização de Serviço
     */
    public CPlNfAg100JNfagTiposBasicoV100Fs?: CPlNfAg100JNfagTiposBasicoV100Fs;
    /**
     * Taxa de Fiscalização de Uso
     */
    public CPlNfAg100JNfagTiposBasicoV100Fu?: CPlNfAg100JNfagTiposBasicoV100Fu;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Imposto instance.
     * Schema context: Tributos incidentes no Produto ou Serviço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Imposto) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Imposto";


        if (props) {

        	this.IBSCBS = props.IBSCBS;
        	this.CPlNfAg100JNfagTiposBasicoV100Pis = (props.CPlNfAg100JNfagTiposBasicoV100Pis) ? new CPlNfAg100JNfagTiposBasicoV100Pis(props.CPlNfAg100JNfagTiposBasicoV100Pis): undefined;
        	this.CPlNfAg100JNfagTiposBasicoV100Cofins = (props.CPlNfAg100JNfagTiposBasicoV100Cofins) ? new CPlNfAg100JNfagTiposBasicoV100Cofins(props.CPlNfAg100JNfagTiposBasicoV100Cofins): undefined;
        	this.retTrib = (props.retTrib) ? new CPlNfAg100JNfagTiposBasicoV100RetTrib(props.retTrib): undefined;
        	this.CPlNfAg100JNfagTiposBasicoV100Fs = (props.CPlNfAg100JNfagTiposBasicoV100Fs) ? new CPlNfAg100JNfagTiposBasicoV100Fs(props.CPlNfAg100JNfagTiposBasicoV100Fs): undefined;
        	this.CPlNfAg100JNfagTiposBasicoV100Fu = (props.CPlNfAg100JNfagTiposBasicoV100Fu) ? new CPlNfAg100JNfagTiposBasicoV100Fu(props.CPlNfAg100JNfagTiposBasicoV100Fu): undefined;
        }
    }
}
