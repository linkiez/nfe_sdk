import { CPlNfAg100JNfagTiposBasicoV100GProcRef } from './CPlNfAg100JNfagTiposBasicoV100GProcRef';

import { CPlNfAg100JNfagTiposBasicoV100GTarif } from './CPlNfAg100JNfagTiposBasicoV100GTarif';

import { CPlNfAg100JNfagTiposBasicoV100Imposto } from './CPlNfAg100JNfagTiposBasicoV100Imposto';

import { CPlNfAg100JNfagTiposBasicoV100Prod } from './CPlNfAg100JNfagTiposBasicoV100Prod';

/**
 * Detalhamento de Produtos e Serviços
 */
export class CPlNfAg100JNfagTiposBasicoV100Det {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de Tarifas por Período
     */
    public gTarif?: CPlNfAg100JNfagTiposBasicoV100GTarif;
    /**
     * Dados do Produto ou Serviço
     */
    public prod?: CPlNfAg100JNfagTiposBasicoV100Prod;
    /**
     * Tributos incidentes no Produto ou Serviço
     */
    public imposto?: CPlNfAg100JNfagTiposBasicoV100Imposto;
    /**
     * Grupo Processo referenciado Este grupo somente deverá ser preenchido quando houver processo judicial ou administrativo que altere valores.
     */
    public gProcRef?: CPlNfAg100JNfagTiposBasicoV100GProcRef;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Det instance.
     * Schema context: Detalhamento de Produtos e Serviços
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Det) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Det";


        if (props) {

        	this.gTarif = (props.gTarif) ? new CPlNfAg100JNfagTiposBasicoV100GTarif(props.gTarif): undefined;
        	this.prod = (props.prod) ? new CPlNfAg100JNfagTiposBasicoV100Prod(props.prod): undefined;
        	this.imposto = (props.imposto) ? new CPlNfAg100JNfagTiposBasicoV100Imposto(props.imposto): undefined;
        	this.gProcRef = (props.gProcRef) ? new CPlNfAg100JNfagTiposBasicoV100GProcRef(props.gProcRef): undefined;
        }
    }
}
