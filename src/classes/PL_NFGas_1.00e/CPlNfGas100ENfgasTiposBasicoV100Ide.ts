import { TPlNfGas100ENfgasTiposBasicoV100FatNf } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100FatNf';

import { TPlNfGas100ENfgasTiposBasicoV100FinNf } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100FinNf';

import { TPlNfGas100ENfgasTiposBasicoV100TtpEmis } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100TtpEmis';

/**
 * Identificação da NFGas
 */
export class CPlNfGas100ENfgasTiposBasicoV100Ide {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código da UF do emitente da NFGas Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE de código de unidades da federação.
     */
    public cUF?: unknown;
    /**
     * Tipo do Ambiente 1 - Produção; 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Modelo da NFGas Utilizar o código 76 para identificação da NFGas
     */
    public mod?: unknown;
    /**
     * Série do documento fiscal Informar a série do documento fiscal (informar zero para série única).
     */
    public serie?: unknown;
    /**
     * Número do documento fiscal Número que identifica o documento fiscal 1 a 999999999.
     */
    public nNF?: unknown;
    /**
     * Data e hora de emissão do documento fiscal Formato AAAA-MM-DDTHH:MM:DD TZD
     */
    public dhEmi?: unknown;
    /**
     * Forma de emissão do Documento Fiscal 1 - Normal ; 2 - Contingência Off Line
     */
    public tpEmis?: TPlNfGas100ENfgasTiposBasicoV100TtpEmis;
    /**
     * Código do município de ocorrência do fato gerador do IBS/CBS
     */
    public cMunFG?: unknown;
    /**
     * Finalidade de emissão da NFGas 0 - NFGas normal; 3 - NFGas substituição;
     */
    public finNFGas?: TPlNfGas100ENfgasTiposBasicoV100FinNf;
    /**
     * Tipo de Faturamento da NFGas 1 - Faturamento Normal; 2 - Faturamento Agregado; 3 - Faturamento Agregador
     */
    public tpFat?: TPlNfGas100ENfgasTiposBasicoV100FatNf;
    /**
     * Grupo de Compras Governamentais
     */
    public gCompraGov?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Ide instance.
     * Schema context: Identificação da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Ide) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Ide";


        if (props) {

        	this.cUF = props.cUF;
        	this.tpAmb = props.tpAmb;
        	this.mod = props.mod;
        	this.serie = props.serie;
        	this.nNF = props.nNF;
        	this.dhEmi = props.dhEmi;
        	this.tpEmis = props.tpEmis;
        	this.cMunFG = props.cMunFG;
        	this.finNFGas = props.finNFGas;
        	this.tpFat = props.tpFat;
        	this.gCompraGov = props.gCompraGov;
        }
    }
}
