import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from './CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

import { CPlNfGas100ENfgasTiposBasicoV100Gpix } from './CPlNfGas100ENfgasTiposBasicoV100Gpix';

import { TPlNfGas100ENfgasTiposBasicoV100Compet } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Compet';

/**
 * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 (normal e agregador) Vedado para tpFat 2 (agregado)
 */
export class CPlNfGas100ENfgasTiposBasicoV100GFat {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do faturamento (AAAAMM)
     */
    public CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
    /**
     * Data de vencimento da fatura Formato AAAA-MM-DD
     */
    public dVencFat?: unknown;
    /**
     * Data de apresentação da fatura Formato AAAA-MM-DD
     */
    public dApresFat?: unknown;
    /**
     * Data prevista próxima leitura Formato AAAA-MM-DD
     */
    public dProxLeitura?: unknown;
    /**
     * Endereço de entrega da fatura. Informar se diferente do endereço do destinatário
     */
    public enderCorresp?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
    /**
     * Grupo de informações do PIX
     */
    public gPIX?: CPlNfGas100ENfgasTiposBasicoV100Gpix;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GFat instance.
     * Schema context: Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 (normal e agregador) Vedado para tpFat 2 (agregado)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GFat) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GFat";


        if (props) {

        	this.CompetFat = props.CompetFat;
        	this.dVencFat = props.dVencFat;
        	this.dApresFat = props.dApresFat;
        	this.dProxLeitura = props.dProxLeitura;
        	this.enderCorresp = (props.enderCorresp) ? new CPlNfGas100ENfgasTiposBasicoV100EndeEmi(props.enderCorresp): undefined;
        	this.gPIX = (props.gPIX) ? new CPlNfGas100ENfgasTiposBasicoV100Gpix(props.gPIX): undefined;
        }
    }
}
